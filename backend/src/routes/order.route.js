import express from "express";
import { addOrder, getAllOrder, updateOrder, getOrderById, deleteOrder } from "../controllers/Order.controller.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.middleware.js";
import { CUSTOMER, MERCHANT, ADMIN } from "../constants/roles.constant.js"

const router = express.Router();

/** 
 * POST /api/Orders/add
*/
router.post("/add", roleBasedAuth(CUSTOMER), addOrder);
/** 
 * GET /api/Orders/all
*/
router.get("/all", getAllOrder);
/** 
 * PUT /api/Orders/update/:id
*/
router.put("/update/:id", roleBasedAuth(MERCHANT, ADMIN), updateOrder);
/** 
 * GET /api/Orders/Order/:id
*/
router.get("/Order/:id", getOrderById);
/** 
 * GET /api/Orders/Order/delete/:id
*/
router.get("/Order/delete/:id", roleBasedAuth(ADMIN), deleteOrder);


export default router;