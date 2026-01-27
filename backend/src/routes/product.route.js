import { addProduct, getAllProduct, updateProduct, getProductById, toggleActiveStatus } from "../controllers/product.controller.js";
import express from "express";
import {authorization} from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/add", authorization, addProduct);
router.get("/all", getAllProduct);
router.get("/update/:id", authorization, updateProduct);
router.get("/product/:id", getProductById);
router.get("/toggleStatus/:internalSku", authorization, toggleActiveStatus);
// router.get("/delete/:id",  authorization, deleteProduct);


export default router;