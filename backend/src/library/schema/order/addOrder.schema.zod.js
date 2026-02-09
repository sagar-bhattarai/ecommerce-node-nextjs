// import * as z from "zod";
import { z } from "zod";

const itemSchema = z.object({
    sku: z
        .string({ required_error: "SKU is required" })
        .min(1, "SKU cannot be empty"),

    productName: z.string().optional(),

    price: z
        .number({ invalid_type_error: "Price must be a number" })
        .optional(),

    quantity: z
        .number({ required_error: "Quantity is required" })
        .min(1, "Quantity must be greater than 0"),

    total: z
        .number({ invalid_type_error: "Total must be a number" })
        .optional(),
});


const orderSchema = z.object({
    orderNumber: z.string({ required_error: "orderNumber is required" }),
    customerId: z.string({ required_error: "customerId is required" }),
    items: z
        .array(itemSchema, {
            required_error: "Items are required",
        })
        .min(1, "At least one attribute is required"),
    grandTotal: z
        // .coerce.number({ required_error: "grandTotal is required" })
        .number({ required_error: "grandTotal is required" })
        .refine(val => val > 0, { message: "grandTotal must be greater than 0" }),
});

export default orderSchema;