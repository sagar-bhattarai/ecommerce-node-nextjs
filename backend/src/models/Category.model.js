import mongoose from "mongoose";
import categoryCounterModel from "../models/counter/CategoryCounter.model.js";

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: [true, "category name is required"],
            trim: true,
            lowercase: true,
            unique: true,
            index: true,
        },
        categoryDescription: {
            type: String,
            trim: true,
            lowercase: true,
        },
        categoryCode: {
            type: String,
            unique: true,
            index: true,
        },
    },
    { timestamps: true }
)



categorySchema.statics.generateCategoryCode = async function (categoryName) {
    const baseCode = categoryName
        .replace(/[^a-zA-Z]/g, "")
        .substring(0, 3)
        .toUpperCase();

    const counter = await categoryCounterModel.findOneAndUpdate(
        { key: baseCode },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    return `${baseCode}-${String(counter.seq).padStart(4, "0")}`;
};

categorySchema.pre("save", async function () {
    // generate categoryCode only once
    if (!this.categoryCode) {
        this.categoryCode = await this.constructor.generateCategoryCode(this.categoryName);
    }
});


const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;