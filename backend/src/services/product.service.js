import ProductModel from "../models/skuBasedProduct/Product.model.js";

const add = async (req)=>{
    console.log(req)

    // const existingProduct = await ProductModel.find(req.body.productName);

    // if (existingProduct) {
    //     throw {
    //         statusFromService: 400,
    //         msgFromService: "Product Name already exists"
    //     }
    // }

    const newProduct = await ProductModel.create(req);

    return await newProduct.save();

}

export default {add}