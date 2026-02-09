import mongoose, { Schema } from "mongoose";

const skuCounterSchema = new mongoose.Schema({
  key: { type: String, unique: true }, // ELC-MOB-IPH
  seq: { type: Number, default: 0 },
});

export default mongoose.model("SkuCounter", skuCounterSchema);
