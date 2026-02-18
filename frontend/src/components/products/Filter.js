"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const MIN_PRICE = 0;
const MAX_PRICE = 9999999;

const Filter = () => {
    const router = useRouter();
    const [sort, setSort] = useState(DEFAULT_SORT);
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState(MIN_PRICE);
    const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

    const filterProducts = () => {
        const params = new URLSearchParams();

        params.set("sort", sort);
        params.set("category", category);
        params.set("min", minPrice);
        params.set("max", maxPrice);

        // router.push(`?sort=${sort}`);
        router.push(`?${params.toString()}`);
    };
    return (
        <aside className="shadow-md rounded-xl p-4">
            <h3 className="font-medium text-lg mb-2">Products Filter</h3>
            {/* sort by */}
            <div className="w-full">
                <h4>Sort By:</h4>
                <select
                    className="w-full p-1 mt-1 border border-gray-300 rounded-md"
                    name="sort"
                    id="sort"
                    onChange={(e) => setSort(e.target.value)}>
                    <option value={JSON.stringify({ createdAt: -1 })}>Latest Products</option>
                    <option value={JSON.stringify({ createdAt: 1 })}>Oldest Products</option>
                    <option value={JSON.stringify({ price: -1 })}>Price: High to Low</option>
                    <option value={JSON.stringify({ price: 1 })}>Price: Low to High</option>
                    <option value={JSON.stringify({ name: 1 })}>Name: A - Z</option>
                    <option value={JSON.stringify({ name: -1 })}>Name: Z - A</option>
                </select>
            </div>
            {/* categories */}
            <div className="w-full mt-4">
                <h4>Categories:</h4>
                <select
                    className="w-full p-1 mt-1 border border-gray-300 rounded-md"
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="smartphones">smartphones</option>
                    <option value="laptops">laptops</option>
                    <option value="smartwatches">smartwatches</option>
                </select>
            </div>
            {/* price range */}
            <div className="w-full mt-4">
                <h4>Price Range:</h4>
                <div >
                    <label className="text-xs text-gray-500" htmlFor="min">Minimum Price</label>
                    <input
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        name="min"
                        id="min"
                        type="number"
                        className="w-full p-1 mt-1 border border-gray-300 rounded-md"
                        onChange={(e) => setMinPrice(e.target.value)} />
                </div>
                <div >
                    <label className="text-xs text-gray-500" htmlFor="max">Maximum Price</label>
                    <input
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        name="max"
                        id="max"
                        type="number"
                        className="w-full p-1 mt-1 border border-gray-300 rounded-md"
                        onChange={(e) => setMaxPrice(e.target.value)} />
                </div>
            </div>

            <button
                onClick={filterProducts}
                className="bg-primary text-white w-full py-1 rounded-md mt-4 cursor-pointer hover:shadow-md">
                Filter Products
            </button>
        </aside>
    );
};

export default Filter;
