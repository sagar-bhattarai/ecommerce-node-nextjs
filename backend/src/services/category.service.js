import CategoryModel from "../models/Category.model.js";
import { validateCategory } from "../utility/validateCategory.js"

const add = async (request) => {
    const reqBody = request.body;
    validateCategory(reqBody);

    const category = await CategoryModel.findOne({ categoryName: reqBody.categoryName });
    if (category) {
        throw {
            statusFromService: 400,
            msgFromService: "duplicate entry."
        }
    }

    const newCategory = new CategoryModel(reqBody);
    await newCategory.save();
    const { __v, createdAt, updatedAt, ...safeCategory } = newCategory.toObject();

    return safeCategory;
}

const all = async () => {
    return await CategoryModel.find().select("categoryName attributes categoryCode");
}

const edit = async (req) => {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
        throw {
            statusFromService: 400,
            msgFromService: "category not found."
        }
    }

    const updateValue =  JSON.stringify(req.body)

    return await CategoryModel.findByIdAndUpdate(req.params.id, updateValue, { new: true }).select("categoryName attributes categoryCode");
}

const single = async (id) => {
    return await CategoryModel.findById(id).select("categoryName attributes categoryCode");
}

const remove = async (req) => {
    // if category is not linked with any of the prodcts then it can be deleted

    // if (!req) {
    //     throw {
    //         statusFromService: 400,
    //         msgFromService: error._message
    //     }
    // }

    // return await CategoryModel.findByIdAndDelete(req.params.id);
}

export default { add, all, edit, single, remove }