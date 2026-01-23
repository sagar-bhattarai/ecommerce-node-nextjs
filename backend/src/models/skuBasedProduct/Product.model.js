import mongoose, { Schema } from "mongoose";
import { skuMiddleware } from "../../middlewares/sku.middleware.js";

const productSchema = new mongoose.Schema(
    {
        internalSku: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },

        publicSku: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
        },

        productName: {
            type: String,
            required: true,
            trim: true,
        },

        productDescription: {
            type: String,
            required: true,
            trim: true,
        },

        productStock: { type: Number, required: true },
        productPrice: { type: Number, required: true },

        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },

        supplierId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        productWeight: Number,

        productDimension: {
            length: Number,
            breadth: Number,
            height: Number,
        },

        productImage: [{ type: String }],
    },
    { timestamps: true }
);

//REQUIRED (don’t skip this)
// productSchema.index({ sku: 1 }, { unique: true }); // for simple sku // last line of defense.


//REQUIRED (don’t skip this)
/* indexes */
productSchema.index({ internalSku: 1 }, { unique: true });  // last line of defense.
productSchema.index({ publicSku: 1 }); // optional (search)

productSchema.pre("save", skuMiddleware);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;