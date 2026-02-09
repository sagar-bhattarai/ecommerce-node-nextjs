import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js"
import { updateUser, deactivateUser, sendOtp, resetPassword, verifyEmail, updateUserRole } from "../controllers/user.controller.js"

import auth from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.middleware.js";
import { ADMIN } from "../constants/roles.constant.js";

import zodValidator from "../middlewares/zod.validator.middleware.js";
import registerSchema from "../library/schema/user/register.schema.zod.js";
import loginSchema from "../library/schema/user/login.schema.zod.js";
import resetSchema from "../library/schema/user/reset-password.zod.js";

const router = express.Router();

/** 
 * POST /api/users/register
*/
router.post("/register",  upload.single('profileImage'), zodValidator(registerSchema), registerUser);
/** 
 * POST /api/users/login
*/
router.post("/login", zodValidator(loginSchema), loginUser);
/** 
 * GET /api/users/logout
*/
router.get("/logout", auth, logoutUser);


/** 
 * PUT /api/users/update
*/
router.put("/update", upload.single('profileImage'), auth, updateUser);
/** 
 * GET /api/users/deactive
*/
router.get("/deactive", auth, deactivateUser);
/** 
 * POST /api/users/reset-password
*/
router.post("/reset-password", auth, zodValidator(resetSchema), resetPassword);
/** 
 * GET /api/users/send-otp
*/
router.get("/send-otp", auth, sendOtp);
/** 
 * GET /api/users/verify-email
*/
router.get("/verify-email", auth, verifyEmail);
/** 
 * PUT /api/users/update-user-role/:id
*/
router.put("/update-user-role/:id", auth, roleBasedAuth(ADMIN), updateUserRole);



export default router