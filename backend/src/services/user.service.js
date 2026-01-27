import UserModel from "../models/User.model.js";
import OtpModel from "../models/Otp.model.js";
import uploadImage from "../utility/uploadImage.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

const update = async (req) => {
    const user = await UserModel.findById(req.user._id);

    if (!user) {
        throw {
            customStatus: 400,
            customMessage: "user not found.",
        };
    }

    let url = await uploadImage(req);
    if (!url) {
        url = user.profileImage;
    }

    const data = {
        userName: req.userName || user.userName,
        userAddress: req.userAddress || user.userAddress,
        profileImage: url,
    }

    const updateUser = new UserModel(data);
    return updateUser.save();
}

const deactivate = async (req) => {
    await UserModel.findByIdAndUpdate(req.user._id, { isActive: false });
}

const reset = async (req) => {
    // reset password
}

const generateOtp = async (id) => {
    const otp = crypto.randomInt(100000, 1000000);
    const hashedOtp = bcrypt.hash(otp.toString(), 10);
    const expiry = Date.now() + 5 * 60 * 1000;

    const saved = await OtpModel.create(
        {
            otp: (await hashedOtp).toString(),
            expiry,
            userId: id
        }
    );

    if (!saved) {
        throw {
            customStatus: 400,
            customMessage: "error while saving otp.",
        };
    }

    // send otp on email 
    // code here

    return otp;
}

const verifyOtp = async (req) => {
    const value = await OtpModel.findOne({ userId: req.user_id });
    console.log("otp hashed value", value)
    const verified = bcrypt.compare(req.otp, value.otp);

    if (!verified) {
        throw {
            customStatus: 400,
            customMessage: "invalid or expired otp.",
        };
    }

    await UserModel.findByIdAndUpdate({ id: req.user._id }, { isEmailVerified: true });
}

export default { update, deactivate, generateOtp, reset, verifyOtp }