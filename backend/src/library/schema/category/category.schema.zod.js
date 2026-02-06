// import * as z from "zod";
import { z } from "zod";

const attributeSchema = z
    .object({})
    .catchall(z.any())
    .refine(obj => Object.keys(obj).length > 0, {
        message: "Attribute cannot be empty",
    });

const categorySchema = z.object({
    categoryName: z
        .string({ required_error: "Category Name is required" })
        .min(3,"Category Name must be at least 3 characters")
        .toLowerCase(),

    attributes: z
        .array(attributeSchema, {
            required_error: "Attributes are required",
        })
        .min(1, "At least one attribute is required"),
});

export default categorySchema;