import express from "express";
import config from "./configs/config.js";
import cookieParser from "cookie-parser";

process.on('unhandledRejection', (reason, promise) => {
    console.error(' #################  Error :: Global Unhandled Promise Rejection ################# ',reason);
});


const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.get('/', (req, res) => { res.send(config.api) });
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js"

server.use("/api/v1/products", productRouter);
server.use("/api/v1/users", userRouter);

export { server };