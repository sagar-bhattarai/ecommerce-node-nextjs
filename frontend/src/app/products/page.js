import ProductCard from "@/components/ProductCard";
import config from "@/config/config";
import axios from "axios";


export const metadata = {
  title: "product | Ecommerce",
  description: "product | Ecommerce",
};

const fetchAllProduct = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}/products`);
    return response.data.result.data;
  } catch (error) {
    console.error("Axios error:", error.response?.data);
  }
};


const productPage = async () => {
  const products = await fetchAllProduct();

  return (
    <div className="container mx-auto flex justify-center gap-2 items-center p-5">
      {products.map((product) => (
        <ProductCard  key={product._id} product={product}/>
      ))}
    </div>
  )
}

export default productPage