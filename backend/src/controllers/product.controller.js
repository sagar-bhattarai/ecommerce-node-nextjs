import productService from "../services/product.service.js";
import config from "../configs/config.js";
const addProduct = async (req, res) => {
    try {
        const result = productService.add(req);

        return res
        .status(200)
        .json({ api: config.api, result, message:"product added successfully"});
        
    } catch (error) {
       return res
        .status({error: error.statusFromService ||  500})
        .json({ message: error.msgFromService || "server error while adding product." });
    }
}

export { addProduct }