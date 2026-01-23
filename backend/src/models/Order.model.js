import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
      index: true,
    },

    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        sku: {
          type: String,
          required: true,
          index: true,
        },

        productName: String,

        price: Number,

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },

        total: Number,
      },
    ],

    grandTotal: Number,

    orderStatus: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);


const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;