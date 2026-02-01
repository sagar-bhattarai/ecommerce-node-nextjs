import mongoose from "mongoose";
import SkuCounter from "../models/counter/SkuCounter.model.js";

export const skuGenerator = async function (productName, categoryId, supplierId ) {
    try {
        const Category = mongoose.model("Category");
        const Supplier = mongoose.model("User");

        const category = await Category.findById(categoryId);
        if (!category) throw new Error("Category not found");

        const supplier = await Supplier.findById(supplierId);
        if (!supplier) throw new Error("Supplier not found");

        const year = new Date().getFullYear();
        const supplierCode = supplier.userCode;
        const categoryCode = category.categoryCode;
        const subCode = category.subCategoryCode || null;


        const nameCode = productName
            .replace(/[^a-zA-Z]/g, "")
            .substring(0, 3)
            .toUpperCase();

        const internalPrefix = subCode
            ? `${year}-${supplierCode}-${categoryCode}-${subCode}-${nameCode}`
            : `${year}-${supplierCode}-${categoryCode}-${nameCode}`;

        const counter = await SkuCounter.findOneAndUpdate(
            { key: internalPrefix },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        const number = String(counter.seq).padStart(4, "0");

        const internalSku = `${internalPrefix}-${number}`;
        const publicSku = subCode
            ? `${categoryCode}-${subCode}-${nameCode}-${number}`
            : `${categoryCode}-${nameCode}-${number}`;

        return { internalSku, publicSku };

    } catch (err) {
        throw new Error(`SKU middleware error: ${err.message}`);
    }
};



/*

----------------------------------------------------
Why this is BEST

    ✔ No race conditions
    ✔ Fast
    ✔ No transactions needed
    ✔ Scales well
    ✔ Easy to debug

👉 Recommended for 95% of apps



----------------------------------------------------
const counter = await SkuCounter.findOneAndUpdate(
  { key: skuPrefix },
  { $inc: { seq: 1 } },
  { new: true, upsert: true }
);

🧠 What problem this solves

    Imagine 10 users try to add the same product at the same time.

    Without this → ❌ duplicate SKUs
    With this → ✅ each product gets a unique number

    This line guarantees ONLY ONE number is given at a time.


----------------------------------------------------------
🔍 Now break the code into pieces
1️⃣ { key: skuPrefix }
{ key: "ELC-MOB-IPH" }
👉 Find the counter for this SKU group



2️⃣ { $inc: { seq: 1 } }
{ seq: 7 } → { seq: 8 }
👉 $inc = increase number by 1
👉 MongoDB does this atomically (no clashes)

Even if 100 requests come together:
One gets 8
Next gets 9
Next gets 10
✔ No duplicates



3️⃣ { upsert: true }
upsert = update OR insert
If counter does not exist yet:
    // before → nothing
        // after
        {
            key: "ELC-MOB-IPH",
            seq: 1
        }
👉 First product starts from 0001



4️⃣ { new: true }
    Without this:
         MongoDB returns the old value (7)
    With this:
         MongoDB returns the updated value (8)
👉 You WANT the new value.


-------------------------------------------------------
🔥 super-simple mental model?

| Code               | Meaning               |
| ------------------ | --------------------- |
| `findOneAndUpdate` | Find counter          |
| `$inc`             | Add 1                 |
| `upsert`           | Create if missing     |
| `new`              | Give me updated value |



*/
















