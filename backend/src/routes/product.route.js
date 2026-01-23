import { addProduct } from "../controllers/product.controller.js";
import express from "express";

const router = express.Router();

router.post("/add", addProduct);
// router.get("/all", getAllProduct);
// router.post("/add", addProduct);
// router.post("/add", addProduct);

export default router;