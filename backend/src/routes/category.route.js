import { addCategory, getAllCategory, updateCategory, getCategoryById, deleteCategory } from "../controllers/category.controller.js";
import express from "express";

const router = express.Router();

/** 
 * POST /api/categories/add
*/
router.post("/add", addCategory);
/** 
 * GET /api/categories/all
*/
router.get("/all", getAllCategory);
/** 
 * PUT /api/categories/update/:id
*/
router.put("/update/:id", updateCategory);
/** 
 * GET /api/categories/category/:id
*/
router.get("/category/:id", getCategoryById);
/** 
 * GET /api/categories/category/delete/:id
*/
router.get("/category/delete/:id", deleteCategory);


export default router;