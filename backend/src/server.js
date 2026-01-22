import express from "express";
import config from "./configs/config.js";

const server = express();
server.get('/', (req, res) => {res.send(config.api)});



export { server };