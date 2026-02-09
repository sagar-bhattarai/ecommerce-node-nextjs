// models/Product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true, trim: true },
        productDescription: { type: String, required: true },
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
        brand: String,
        images: [String],
        isActive: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);















// import mongoose, { Schema } from "mongoose";

// const productSchema = new Schema(
//     {
//         productName: {
//             type: String,
//             required: true
//         },
//         productDescription: String,

//         categoryId: {
//             type: Schema.Types.ObjectId,
//             ref: "Category",
//             required: true,
//         },

//         brand: String,
//         images: [String],
//         isActive: {
//             type: Boolean,
//             default: true
//         },
//     },
//     { timestamps: true },
// );

// const ProductModel = mongoose.model("Product", productSchema);

// export default ProductModel;



























/*
import mongoose, { Schema } from "mongoose";
import { skuMiddleware } from "../middlewares/sku.middleware.js";

const productSchema = new mongoose.Schema(
    {
        internalSku: {
            type: String,
            unique: true, // last line of defense.
            uppercase: true,
            trim: true,
        },

        publicSku: {
            type: String,
            uppercase: true,
            trim: true,
        },

        productName: {
            type: String,
            required: [true, "category name is required"],
            trim: true,
        },

        productDescription: {
            type: String,
             required: [true, "product description is required"],
            trim: true,
        },

        productStock: {
            type: Number,
            default: 0,
            min: 0
        },

        productPrice: {
            type: Number,
            default: 0,
            min: 0
        },

        oldPrice: Number,

        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "category id is required"],
        },

        supplierId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "merchant id is required"],
        },

        productWeight: Number,

        productDimension: {
            length: Number,
            breadth: Number,
            height: Number,
        },

        attributes: {
            color: {
                name: String,
                hex: String,
            },
            size: {
                type: String,
                enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
            },
        },

        productImage: [{ type: String }],

        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

//REQUIRED (don’t skip this)
// productSchema.index({ sku: 1 }, { unique: true }); // for simple sku // last line of defense.


//REQUIRED (don’t skip this)
// indexes 
// productSchema.index({ internalSku: 1 }, { unique: true });  // last line of defense.
productSchema.index({ publicSku: 1 }); // optional (search)

// productSchema.pre("save", skuMiddleware);
productSchema.pre("validate", skuMiddleware);  // {publicSku, internalSku} comes from here 

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;

*/
