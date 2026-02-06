import { addCategory, getAllCategory, updateCategory, getCategoryById, deleteCategory } from "../controllers/category.controller.js";
import express from "express";


import zodValidator from "../middlewares/zod.validator.middleware.js";
import categorySchema from "../library/schema/category/category.schema.zod.js";

const router = express.Router();

/** 
 * POST /api/categories/add
*/
router.post("/add", zodValidator(categorySchema), addCategory);
/** 
 * GET /api/categories/all
*/
router.get("/all", getAllCategory);
/** 
 * PUT /api/categories/update/:id
*/
router.put("/update/:id", zodValidator(categorySchema), updateCategory);
/** 
 * GET /api/categories/category/:id
*/
router.get("/category/:id", getCategoryById);
/** 
 * GET /api/categories/category/delete/:id
*/
router.get("/category/delete/:id", deleteCategory);


export default router;