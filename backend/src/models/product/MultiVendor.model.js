// models/MultiVendor.model.js
import mongoose from "mongoose";

const multiVendorSchema = new mongoose.Schema(
  {
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    variantId: { type: mongoose.Schema.Types.ObjectId, ref: "ProductVariant", required: true },

    publicSku: { type: String, required: true },

    productPrice: { type: Number, required: true },
    oldPrice: Number,
    productStock: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("MultiVendor", multiVendorSchema);

















// import mongoose, { Schema } from "mongoose";

// const multiVendorListingSchema = new Schema({
//   vendorId: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },

//   productId: {
//     type: Schema.Types.ObjectId,
//     ref: "Product",
//     required: true
//   },

//   variantId: {
//     type: Schema.Types.ObjectId,
//     ref: "ProductVariant",
//     required: true
//   },

//   publicSku: {
//     type: String,
//     uppercase: true,
//     index: true
//   },

//   productPrice: { type: Number, required: true },
//   oldPrice: Number,

//   productStock: { type: Number, default: 0, min: 0 },

//   isActive: { type: Boolean, default: true }
// }, { timestamps: true });

// const MultiVendorModel = mongoose.model("MultiVendor", multiVendorListingSchema);

// export default MultiVendorModel;