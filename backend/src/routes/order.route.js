import express from "express";
import { addOrder, getAllOrder, updateOrder, getOrderById, deleteOrder } from "../controllers/order.controller.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.middleware.js";
import { CUSTOMER, MERCHANT, ADMIN } from "../constants/roles.constant.js";

import zodValidator from "../middlewares/zod.validator.middleware.js";
import addOrderSchema from "../library/schema/order/addOrder.schema.zod.js";
import orderStatusSchema from "../library/schema/order/orderStatus.schema.zod.js";

const router = express.Router();

/** 
 * GET /api/orders/all
*/
// router.get("/all", getAllOrder);
router.get("/", getAllOrder);
/** 
 * POST /api/orders/add
*/
router.post("/add", roleBasedAuth(CUSTOMER), zodValidator(addOrderSchema), addOrder);
/** 
 * PATCH /api/orders/update/:id
*/
router.patch("/update/:id", roleBasedAuth([MERCHANT, ADMIN]), zodValidator(orderStatusSchema), updateOrder);
/** 
 * GET /api/orders/Order/:id
*/
router.get("/order/:id", getOrderById);

/** 
 * GET /api/orders/Order/delete/:id
*/
router.get("/order/delete/:id", roleBasedAuth(ADMIN), deleteOrder);


export default router;