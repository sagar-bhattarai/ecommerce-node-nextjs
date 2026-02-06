import express from "express";
import { addOrder, getAllOrder, updateOrder, getOrderById, deleteOrder } from "../controllers/order.controller.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.middleware.js";
import { CUSTOMER, MERCHANT, ADMIN } from "../constants/roles.constant.js";

import zodValidator from "../middlewares/zod.validator.middleware.js";
import addOrderSchema from "../library/schema/order/addOrder.schema.zod.js"; 
import orderStatusSchema from "../library/schema/order/orderStatus.schema.zod.js"; 

const router = express.Router();

/** 
 * POST /api/Orders/add
*/
router.post("/add", roleBasedAuth(CUSTOMER), zodValidator(addOrderSchema), addOrder);

/** 
 * GET /api/Orders/all
*/
router.get("/all", getAllOrder);

/** 
 * PATCH /api/Orders/update/:id
*/
router.patch("/update/:id", roleBasedAuth([MERCHANT, ADMIN]), zodValidator(orderStatusSchema), updateOrder);

/** 
 * GET /api/Orders/Order/:id
*/
router.get("/Order/:id", getOrderById);

/** 
 * GET /api/Orders/Order/delete/:id
*/
router.get("/Order/delete/:id", roleBasedAuth(ADMIN), deleteOrder);


export default router;