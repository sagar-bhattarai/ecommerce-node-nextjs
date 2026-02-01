// models/ProductVariant.model.js
import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },

    internalSku: {
      type: String,
      required: true,
      unique: true
    },

    attributes: {
      type: Map,
      of: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("ProductVariant", variantSchema);














// import mongoose, { Schema } from "mongoose";
// // import { skuMiddleware } from "../../middlewares/sku.middleware.js";

// const productVariantSchema = new Schema({
//   productId: {
//     type: Schema.Types.ObjectId,
//     ref: "Product",
//     required: true
//   },

//   internalSku: {
//     type: String,
//     unique: true,
//     uppercase: true
//   },

//   attributes: {
//     type: Map,
//     of: Schema.Types.Mixed
//   },

//   shipping: {
//     weight: Number,
//     dimensions: {
//       length: Number,
//       width: Number,
//       height: Number
//     }
//   }
// });


// // productVariantSchema.pre("validate", skuMiddleware);  // {publicSku, internalSku} comes from here 

// const ProductVariantModel = mongoose.model("Varient", productVariantSchema);

// export default ProductVariantModel;