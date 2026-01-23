import express from "express";
import config from "./configs/config.js";

const server = express();
server.get('/', (req, res) => { res.send(config.api) });


import productRouter from "./routes/product.route.js"

server.use("/api/v1/products", productRouter);

export { server };