import mongoose, { Schema } from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: [true, "userId is required"]
        },
        otp: {
            type: String,
            required: [true, "otp is required"]
        },
        expiry: {
            type: String,
            required: [true, "expiry is required"]
        }
    },
    { timestamps: true }
);

const OtpModel = new mongoose.model("Otp", otpSchema);

export default OtpModel;