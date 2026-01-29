import categoryService from "../services/category.service.js";
import config from "../configs/config.js";

const addCategory = async (req, res) => {
    try {
        const result = await categoryService.add(req);

        return res
            .status(200)
            .json({ api: config.api, result, message: "category added successfully" });

    } catch (error) {
        return res
            .status(error.statusFromService || 500)
            .json({ error: true, message: error.msgFromService || "server error while adding category." });
    }
}

const getAllCategory = async (req, res) => {
    try {
        const result = await categoryService.all(req);

        return res
            .status(200)
            .json({ api: config.api, result, message: "Categorys fetched successfully." });

    } catch (error) {
        return res
            .status(error.statusFromService || 500)
            .json({ error: true, message: error.msgFromService || "server error while fetching Categorys." });
    }
}

const updateCategory = async (req, res) => {
    try {
        const result = await categoryService.edit(req);

        return res
            .status(200)
            .json({ api: config.api, result, message: "category updated successfully." });

    } catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "server error while updating category." });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const result = await categoryService.single(req.params.id);

        return res
            .status(200)
            .json({ api: config.api, result, message: "category fetched successfully." });

    } catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "server error while fetching category." });
    }
}
const deleteCategory = async (req, res) => {
    try {
        const result = await categoryService.remove(req.params.id);

        return res
            .status(200)
            .json({ api: config.api, result, message: "category deleted successfully." });

    } catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "server error while deleting category." });
    }
}


export { addCategory, getAllCategory, updateCategory, getCategoryById, deleteCategory }