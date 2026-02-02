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
 * GET /api/products
 *     /api/products?minPrice=1000&attributes[color]=Red
 *     /api/products?attributes[color]=Red&attributes[size]=M
 *     /api/products?brand=Nike&attributes[material]=Cotton
 *     /api/products?sort=price_asc
*/
router.get("/", getAllProduct);


/** 
 * GET /api/products/product/:id
*/
router.get("/product/:id", getProductById);

/** 
 * GET /api/products/toggleStatus/:internalSku
*/
router.get("/toggleStatus/:internalSku", auth, roleBasedAuth(MERCHANT), toggleActiveStatus);

/** 
 * PATCH /api/products/update/:id
 *       /api/products/:id/admin-update
*/
// router.patch("/update/:id", auth, roleBasedAuth(MERCHANT), updateProduct);   
router.patch("/:id/admin-update", auth, roleBasedAuth(MERCHANT, ADMIN), updateProduct);

/** 
 * GET /api/products/delete/:id
*/
// router.get("/delete/:id",  auth, roleBasedAuth(ADMIN), deleteProduct);


/** 
 * PATCH /products/vendor-listings/:id
*/
// router.patch("/vendor-listings/:id", auth, roleBasedAuth(MERCHANT, ADMIN), ------- );

/** 
 * PATCH /products/variants/:variantId
*/
// router.patch("/variants/:variantId", auth, roleBasedAuth(MERCHANT, ADMIN), -------);

/** 
 * PATCH /products/vendor-listings/:id
*/
// router.patch("/vendor-listings/:id", auth, roleBasedAuth(MERCHANT, ADMIN), -------);






export default router;