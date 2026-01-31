import ProductModel from "../models/product/Product.model.js";

const add = async (req) => {
    // console.log(req.body)

    // if (!req.body) {
    //     throw {
    //         statusFromService: 400,
    //         msgFromService: error._message
    //     }
    // }

    const product = new ProductModel(req.body);
    return await product.save();

}

const all = async (req) => {
    return await ProductModel.find();
}

const edit = async (req) => {
    // return await ProductModel.findByIdAndUpdate(req.params.id);
}
const single = async (id) => {
    return await ProductModel.findById(id);
}

const toggle = async (internalSku) => {

    const updated = await ProductModel.findOneAndUpdate(
        { internalSku },
        [{ $set: { isActive: { $not: "$isActive" }, lastStatusChangeAt: new Date() } }],
        { new: true, updatePipeline: true }
    );

    if (!updated) {
        throw {
            statusFromService: 400,
            msgFromService: "Product not found for given internal SKU"
        }
    }

    return updated;
}

export default { add, all, edit, single, toggle }