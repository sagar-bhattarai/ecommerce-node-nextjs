import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js"
import {authorization} from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/logout/:id", authorization, logoutUser);


export default router