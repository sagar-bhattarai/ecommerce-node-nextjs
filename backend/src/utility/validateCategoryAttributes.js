export const validateCategoryAttributes = (category, attributes) => {
  for (const attr of category.attributes) {
    const value = attributes[attr.name];

    // 1️⃣ required check
    if (attr.required && (value === undefined || value === null || value === "")) {
      throw new Error(`${attr.name} is required`);
    }

    // if not provided and not required → skip
    if (value === undefined) continue;

    // 2️⃣ type check
    if (attr.type === "number" && isNaN(value)) {
      throw new Error(`${attr.name} must be a number`);
    }

    if (attr.type === "string" && typeof value !== "string") {
      throw new Error(`${attr.name} must be a string`);
    }

    // 3️⃣ enum check
    if (attr.type === "enum" && !attr.values.includes(value)) {
      throw new Error(
        `${attr.name} must be one of: ${attr.values.join(", ")}`
      );
    }
  }
};
