import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        transactionId: String,  // ORDER NUMBER
        amount: {
            type: Number,
            required: [true, "payment amount is required"]
        },
        method: {
            type: String,
            required: [true, "payment method is required"],
            enum: ["CARD", "ONLINE", "CASH"]
        },
        status: {
            type: String,
            enum: ["PENDING", "SUCCESS", "FAILED"],
            default: "PENDING"
        },
        paymentId: String
    },
    { timestamps: true }
)

const PaymentModel = mongoose.model("Payment", paymentSchema);
export default PaymentModel;