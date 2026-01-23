import express from "express";
import config from "./configs/config.js";

process.on('unhandledRejection', (reason, promise) => {
    console.error(' #################  Error :: Global Unhandled Promise Rejection ################# ',reason);
});


const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/', (req, res) => { res.send(config.api) });
import productRouter from "./routes/product.route.js"

server.use("/api/v1/products", productRouter);

export { server };