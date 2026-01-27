import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js"
import { updateUser, deactivateUser, sendOtp, resetPassword, verifyEmail } from "../controllers/user.controller.js"

import {authorization} from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", upload.single('profileImage'), registerUser);
router.post("/login", loginUser);
router.get("/logout", authorization, logoutUser);

router.put("/update", authorization, updateUser);
router.get("/deactive", authorization, deactivateUser);
router.post("/reset-password", authorization, resetPassword);
router.get("/send-otp", authorization, sendOtp);
router.get("/verify-email", authorization, verifyEmail);



export default router