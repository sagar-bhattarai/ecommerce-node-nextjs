import OrderModel from "../models/Order.model.js";
import {PAID, SHIPPED, DELIVERED} from "../constants/order.constant.js";

const add = async (req) => {
    const order = await OrderModel.findOne({ orderNumber: req.body.orderNumber });
    if (order) {
        throw {
            statusFromService: 400,
            msgFromService: "duplicate entry."
        }
    }

    const newOrder = new OrderModel(req.body);
    return await newOrder.save();
}

const all = async () => {
    return await OrderModel.find();
}

const edit = async (req) => {
    const order = await OrderModel.findById(req.params.id);
    if (!order) {
        throw {
            statusFromService: 400,
            msgFromService: "order not found."
        }
    }
    
    const allowedStatus = [PAID, SHIPPED, DELIVERED];
    if(!allowedStatus.includes(req.body.orderStatus)){
        throw {
            statusFromService: 400,
            msgFromService: "Status not found/invalid."
        }
    }

    return await OrderModel.findByIdAndUpdate(req.params.id, { orderStatus: req.body.orderStatus}, { new: true }).select("orderNumber orderStatus");
}

const single = async (id) => {
    return await OrderModel.findById(id);
}

const remove = async (req) => {

    // if (!req) {
    //     throw {
    //         statusFromService: 400,
    //         msgFromService: error._message
    //     }
    // }

    // return await OrderModel.findByIdAndDelete(req.params.id);
}

export default { add, all, edit, single, remove }