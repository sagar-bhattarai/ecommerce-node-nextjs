import orderService from "../services/order.service.js";
import config from "../configs/config.js";

const addOrder = async (req, res) => {
    try {
        const result = await orderService.add(req);

        return res
            .status(200)
            .json({ api: config.api, result, message: "order added successfully" });

    } catch (error) {
        return res
            .status(error.statusFromService || 500)
            .json({ error: true, message: error.msgFromService || "server error while adding order." });
    }
}

const getAllOrder = async (req, res) => {
    try {
        const result = await orderService.all(req);

        return res
            .status(200)
            .json({ api: config.api, result, message: "orders fetched successfully." });

    } catch (error) {
        return res
            .status(error.statusFromService || 500)
            .json({ error: true, message: error.msgFromService || "server error while fetching orders." });
    }
}

const updateOrder = async (req, res) => {
    try {
        const result = await orderService.edit(req);

        return res
            .status(200)
            .json({ api: config.api, result, message: "order updated successfully." });

    } catch (error) {
        return res
            .status(error.statusFromService || 500)
            .json({ error: true, message: error.msgFromService || "server error while updating order." });
    }
}

const getOrderById = async (req, res) => {
    try {
        const result = await orderService.single(req.params.id);

        return res
            .status(200)
            .json({ api: config.api, result, message: "order fetched successfully." });

    } catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "server error while fetching order." });
    }
}
const deleteOrder = async (req, res) => {
    try {
        const result = await orderService.remove(req.params.id);

        return res
            .status(200)
            .json({ api: config.api, result, message: "order deleted successfully." });

    } catch (error) {
        return res
            .status(500)
            .json({ error: true, message: "server error while deleting order." });
    }
}



export { addOrder, getAllOrder, updateOrder, getOrderById, deleteOrder }