export const validateCategory = (categoryData) => {
    if (!categoryData.categoryName || typeof categoryData.categoryName !== "string") {
        throw new Error("categoryName is required and must be a string");
    }

    if (!Array.isArray(categoryData.attributes) || categoryData.attributes.length === 0) {
        throw new Error("attributes must be a non-empty array");
    }

    categoryData.attributes.forEach((attr, index) => {
        if (!attr.name || typeof attr.name !== "string") {
            throw new Error(`Attribute at index ${index} must have a valid name`);
        }

        if (!attr.type || !["string", "number", "enum"].includes(attr.type)) {
            throw new Error(
                `Attribute "${attr.name}" must have a valid type: string, number, or enum`
            );
        }

        if (attr.type === "enum") {
            if (!Array.isArray(attr.values) || attr.values.length === 0) {
                throw new Error(
                    `Attribute "${attr.name}" is enum type and must have a non-empty values array`
                );
            }
        } else {
            // non-enum types should not have values array (optional, can enforce)
            if (attr.values && attr.values.length > 0) {
                console.warn(`Attribute "${attr.name}" has values but type is not enum`);
            }
        }

        if (typeof attr.required !== "boolean") {
            throw new Error(`Attribute "${attr.name}" required must be true or false`);
        }
    });
};


