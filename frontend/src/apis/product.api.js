import axios from "axios";
import config from "@/config/config";

export const fetchAllProducts = async ({ searchParams }) => {
    const sort = (await searchParams)?.sort ?? ""
    const min = (await searchParams)?.min ?? ""
    const max = (await searchParams)?.max ?? ""
    const category = (await searchParams)?.category ?? ""
    const brands = (await searchParams)?.brands ?? ""
    const name = (await searchParams)?.name ?? ""

    const response = await axios.get(`${config.apiUrl}/products?sort=${sort}&min=${min}&max=${max}&category=${category}&brands=${brands}&name=${name}`);
    return response.data.result.data;
};

export const addProduct = async ( data ) => {
    const authToken = localStorage.getItem("accessToken");

    const response = await axios.post(
        `${config.apiUrl}/products/add`,
        data,
        {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    );
    console.log(response)
    return response;
    // return response.data.result.data;
};