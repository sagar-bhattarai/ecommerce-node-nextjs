import config from "../configs/config.js";
import UserModel from "../models/User.model.js";
import  jwt  from "jsonwebtoken";


const validateUser = async (req) => {
    const token = req.headers?.authorization?.split(" ")[1] || req.headers.cookie.split("accessToken=")[1] || req.cookies?.accessToken;
    
    if (!token) {
        throw {
            status: 401,
            message: "unauthorized request"
        }
    }
    const decodedToken = jwt.verify(token, config.access_token_secret);
    const user = await UserModel.findByIdAndUpdate(decodedToken._id, {isActive: true}).select("-userPassword -refreshToken -createdAt -updatedAt -__v");
    return user;
}

const authorization = async (req, res, next) => {
    try {
        const user = await validateUser(req);
        req.user = user;
        req.role = user.userRole;
        next();
    } catch (error) {
       return res
       .status(error.status || 500)
       .json({error: true, message: error.message || "internal server error in auth middleware"})
    }

}

export  { authorization }