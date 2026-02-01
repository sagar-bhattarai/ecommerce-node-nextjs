import ProductModel from "../models/product/Product.model.js";
import CategoryModel from "../models/Category.model.js";
import ProductVariantModel from "../models/product/ProductVarient.model.js";
import MultiVendorModel from "../models/product/MultiVendor.model.js";
import { skuGenerator } from "../utility/skuGenerator.js";
import { validateCategoryAttributes } from "../utility/validateCategoryAttributes.js"
import mongoose from "mongoose";

const createProductWithVariantForVendor = async (req, res) => {
    const {
        productName,
        productDescription,
        categoryId,
        brand,
        attributes,
        productPrice,
        oldPrice,
        productStock,
    } = req.body;

    const vendorId = req.user._id;

    const category = await CategoryModel.findById(categoryId);
    if (!category) throw new Error("Invalid category");

    validateCategoryAttributes(category, attributes);

    let product = await ProductModel.findOne({ productName, categoryId });
    if (!product) {
        product = await ProductModel.create({
            productName,
            productDescription,
            categoryId,
            brand,
        });
    }


    const { internalSku, publicSku } = await skuGenerator(productName, categoryId, vendorId);

    let variant = await ProductVariantModel.findOne({
        productId: product._id,
        internalSku,
        attributes,
    });

 
    if (!variant) {
        variant = await ProductVariantModel.create({
            productId: product._id,
            internalSku,
            attributes,
            // shipping
        });
    }

    const listing = await MultiVendorModel.create({
        vendorId,
        productId: product._id,
        variantId: variant._id,
        publicSku,
        productPrice,
        oldPrice,
        productStock,
    });
    return { product, variant, listing };
};

const all = async (req) => {

    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 3;
    const skip = (page - 1) * size;

    const totalProducts = await ProductModel.countDocuments({ isActive: true });

    // 1. fetch products
    const products = await ProductModel.find({ isActive: true })
        .select("productName brand categoryId images")
        .skip(skip)
        .limit(size)
        .lean();

    if (!products.length) {
        return {
            page,
            size,
            totalProducts,
            totalPages: Math.ceil(totalProducts / size),
            data: []
        };
    }

    // 2. fetch variants
    const productIds = products.map(p => p._id);

    const variants = await ProductVariantModel.find({
        productId: { $in: productIds }
    })
        .select("productId attributes")
        .lean();

    // 3. fetch listings (price + stock)
    const variantIds = variants.map(v => v._id);

    const listings = await MultiVendorModel.find({
        variantId: { $in: variantIds },
        isActive: true
    })
        .select("variantId productPrice productStock")
        .lean();

    // 4. map listings by variant
    const listingMap = {};
    listings.forEach(l => {
        const key = l.variantId.toString();
        if (!listingMap[key]) listingMap[key] = [];
        listingMap[key].push(l);
    });

    // 5. attach price info to variants
    const variantsByProduct = {};
    variants.forEach(v => {
        const prices = (listingMap[v._id.toString()] || []).map(l => l.price);

        const cheapestPrice = prices.length ? Math.min(...prices) : null;

        const variantData = {
            _id: v._id,
            attributes: v.attributes,
            cheapestPrice
        };

        const pid = v.productId.toString();
        if (!variantsByProduct[pid]) variantsByProduct[pid] = [];
        variantsByProduct[pid].push(variantData);
    });

    // 6. attach variants to products
    const result = products.map(p => ({
        ...p,
        variants: variantsByProduct[p._id.toString()] || []
    }));

    const data = {
        page,
        size,
        totalProducts,
        totalPages: Math.ceil(totalProducts / size),
        data: result
    }

    return data;
};


const single = async (id) => {
    // 1. product
    const product = await ProductModel.findOne({
        _id: productId,
        isActive: true
    }).lean();

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    // 2. variants
    const variants = await ProductVariantModel.find({
        productId: product._id
    }).lean();

    // 3. vendor listings
    const variantIds = variants.map(v => v._id);

    const listings = await MultiVendorModel.find({
        variantId: { $in: variantIds },
        isActive: true
    }).lean();

    // 4. group listings by variant
    const listingMap = {};
    listings.forEach(l => {
        const key = l.variantId.toString();
        if (!listingMap[key]) listingMap[key] = [];
        listingMap[key].push({
            vendorId: l.vendorId,
            price: l.price,
            stock: l.stock
        });
    });

    // 5. attach listings + cheapest price
    const finalVariants = variants.map(v => {
        const vendorList = listingMap[v._id.toString()] || [];
        const prices = vendorList.map(l => l.price);

        return {
            _id: v._id,
            sku: v.internalSku,
            attributes: v.attributes,
            vendors: vendorList,
            cheapestPrice: prices.length ? Math.min(...prices) : null
        };
    });

    return {
        product,
        variants: finalVariants
    };
};

const toggle = async (productId) => {
    const updated = await ProductModel.findIdAndUpdate(
        { _id: productId },
        [
            {
                $set: {
                    isActive: { $not: "$isActive" },
                    lastStatusChangeAt: new Date(),
                },
            },
        ],
        { new: true, updatePipeline: true },
    );

    if (!updated) {
        throw {
            statusFromService: 400,
            msgFromService: "Product not found for given id.",
        };
    }

    return updated;
};


/*

const updateProduct = async (req, res) => {
    const product = await ProductModel.findById(req.params.productId);

    if (!product) {
        throw {
            statusFromService: 400,
            msgFromService: "Product not found for given id.",
        };
    }

    product.productName = req.body.productName ?? product.productName;
    product.productDescription = req.body.productDescription ?? product.productDescription;
    product.brand = req.body.brand ?? product.brand;

    await product.save();

    return product;
};

const updateVariant = async (req, res) => {
    const { variantId } = req.params;
    const { attributes, internalSku, productWeight, productDimension } = req.body;

    const variant = await ProductVariantModel.findById(variantId);

    if (!variant) {
        throw {
            statusFromService: 400,
            msgFromService: "Variant not found.",
        };
    }

    // Update only allowed fields
    if (attributes) variant.attributes = attributes;
    if (internalSku) variant.internalSku = internalSku;
    if (productWeight !== undefined) variant.productWeight = productWeight;
    if (productDimension) variant.productDimension = productDimension;

    await variant.save();

    return variant;
};
const updateVendorListing = async (req, res) => {

    const { id } = req.params;
    const { price, stock, isActive } = req.body;

    // Only allow vendor to edit their own listing
    const listing = await VendorListingModel.findOne({
        _id: id,
        vendorId: req.user._id // multi-vendor safety
    });

    if (!listing) {
        throw {
            statusFromService: 400,
            msgFromService: "Listing not found or unauthorized.",
        };
    }

    if (price !== undefined) listing.price = price;
    if (stock !== undefined) listing.stock = stock;
    if (isActive !== undefined) listing.isActive = isActive;

    await listing.save();

    return listing;
};
*/

const edit = async (req, res) => {   // adminUpdateProduct
    // const session = await mongoose.startSession();
    // session.startTransaction();

    try {
        const productId  = req.params.id;
        const { productData, variantsData, vendorListingsData } = req.body;

        // 1️⃣ Update product info
        const product = await ProductModel.findByIdAndUpdate(
            productId,
            productData,
            // { new: true, runValidators: true, session }
            { new: true, runValidators: true }
        );

        if (!product) {
            throw {
                statusFromService: 400,
                msgFromService: "Product not found.",
            };
        }

        // 2️⃣ Update variants (array of { variantId, ...data })
        if (variantsData && variantsData.length) {
            for (const v of variantsData) {
                await ProductVariantModel.findByIdAndUpdate(
                    v.variantId,
                    v,
                    // { new: true, runValidators: true, session }
                    { new: true, runValidators: true }
                );
            }
        }

        // 3️⃣ Update vendor listings (array of { listingId, ...data })
        if (vendorListingsData && vendorListingsData.length) {
            for (const l of vendorListingsData) {
                await MultiVendorModel.findByIdAndUpdate(
                    l.listingId,
                    l,
                    // { new: true, runValidators: true, session }
                    { new: true, runValidators: true }
                );
            }
        }

        // await session.commitTransaction();
        // session.endSession();

        return { message: "Product, variants & listings updated successfully" };

    } catch (err) {
        // await session.abortTransaction();
        // session.endSession();
        throw err;
    }
};

// export default { createProductWithVariantForVendor, all, single, toggle, updateProduct, updateVendorListing, updateVariant, edit };
export default { createProductWithVariantForVendor, all, single, toggle, edit };
