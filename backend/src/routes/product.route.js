import { addProduct, getAllProduct, updateProduct, getProductById, toggleActiveStatus } from "../controllers/product.controller.js";
import express from "express";

const router = express.Router();

router.post("/add", addProduct);
router.get("/all", getAllProduct);
router.get("/update/:id", updateProduct);
router.get("/product/:id", getProductById);
router.get("/toggleStatus/:internalSku", toggleActiveStatus);
// router.get("/delete/:id", deleteProduct);


export default router;