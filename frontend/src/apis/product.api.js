import axios from "axios";
import config from "@/config/config"

export const fetchAllProducts = async ({searchParams}) => {
    const sort = (await searchParams)?.sort ?? ""
    const min = (await searchParams)?.min ?? ""
    const max = (await searchParams)?.max ?? ""

    const response = await axios.get(`${config.apiUrl}/products?sort=${sort}&min=${min}&max=${max}`);
    return response.data.result.data;
};