// import * as z from "zod";
import { z } from "zod";
import {PAID, SHIPPED, DELIVERED}  from "../../../constants/order.constant.js";

const orderStatusSchema = z.enum([PAID, SHIPPED, DELIVERED], {
  errorMap: () => ({ message: "Status not found/invalid." }),
});

const orderStatus = z.object({
  orderStatus: orderStatusSchema,
});

export default orderStatus;