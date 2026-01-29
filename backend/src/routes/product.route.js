import { addProduct, getAllProduct, updateProduct, getProductById, toggleActiveStatus } from "../controllers/product.controller.js";
import express from "express";
import auth from "../middlewares/auth.middleware.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.middleware.js";
import { CUSTOMER, MERCHANT, ADMIN } from "../constants/roles.constant.js";

const router = express.Router();

/** 
 * POST /api/products/add
*/
router.post("/add", auth, roleBasedAuth(MERCHANT), addProduct);  
/** 
 * GET /api/products/all
*/
router.get("/all", getAllProduct);
/** 
 * PUT /api/products/update/:id
*/
router.put("/update/:id", auth, roleBasedAuth(MERCHANT), updateProduct);   
/** 
 * GET /api/products/product/:id
*/
router.get("/product/:id", getProductById);
/** 
 * GET /api/products/toggleStatus/:internalSku
*/
router.get("/toggleStatus/:internalSku", auth, roleBasedAuth(MERCHANT), toggleActiveStatus);
/** 
 * GET /api/products/delete/:id
*/
// router.get("/delete/:id",  auth, roleBasedAuth(ADMIN), deleteProduct);


export default router;