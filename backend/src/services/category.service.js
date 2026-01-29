import CategoryModel from "../models/Category.model.js";

const add = async (req) => {
    const category = await CategoryModel.findOne({ categoryName: req.body.categoryName });
    if (category) {
        throw {
            statusFromService: 400,
            msgFromService: "duplicate entry."
        }
    }

    const newCategory = new CategoryModel(req.body);
    await newCategory.save();
    const { userPassword, __v, createdAt, updatedAt, ...safeCategory } = newCategory.toObject();

    return safeCategory;
}

const all = async () => {
    return await CategoryModel.find().select("categoryName categoryDescription");
}

const edit = async (req) => {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
        throw {
            statusFromService: 400,
            msgFromService: "category not found."
        }
    }

    let updateValue = {
        categoryName: req.body.categoryName || category.categoryName,
        categoryDescription: req.body.categoryDescription || category.categoryDescription
    };

    return await CategoryModel.findByIdAndUpdate(req.params.id, updateValue, { new: true }).select("categoryName categoryDescription");
}

const single = async (id) => {
    return await CategoryModel.findById(id).select("categoryName categoryDescription");
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