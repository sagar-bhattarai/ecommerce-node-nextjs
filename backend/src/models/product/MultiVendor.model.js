import mongoose, { Schema } from "mongoose";

const multiVendorListingSchema = new Schema({
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  variantId: {
    type: Schema.Types.ObjectId,
    ref: "ProductVariant",
    required: true
  },

  publicSku: {
    type: String,
    uppercase: true,
    index: true
  },

  price: { type: Number, required: true },
  oldPrice: Number,

  stock: { type: Number, default: 0, min: 0 },

  isActive: { type: Boolean, default: true }
}, { timestamps: true });

const MultiVendorModel = mongoose.model("MultiVendo", multiVendorListingSchema);

export default MultiVendorModel;