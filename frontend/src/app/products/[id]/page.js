import axios from "axios";
import config from "@/config/config";

export const generateMetadata = async ({ params }) => {
    const id = (await params).id;
    const product = await fetchProductById(id);
    return {
        title: product?.productName,
    }
}


const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${config.apiUrl}/products/product/${id}`);
        console.log("products", response.data.result.product);
        return response.data.result.product;
    } catch (error) {
        console.error("Axios error:", error.response?.data);
    }
};


const productPageById = async ({ params, searchParams }) => {
    const id = (await params).id;
    const query = await searchParams;
    const product = fetchProductById(id)
    return (
        <div>productPageById {id}</div>
    )
}

export default productPageById