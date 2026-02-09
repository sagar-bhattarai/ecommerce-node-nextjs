import mongoose, { Schema } from "mongoose";
import {PAID, SHIPPED, DELIVERED, PENDING}  from "../constants/order.constant.js";

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
      // enum: ["pending", "paid", "shipped", "delivered"],
      enum: [PAID, SHIPPED, DELIVERED , PENDING],
      default: PENDING,
    },
    
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment"
    }
  },
  {
    timestamps: true,
  }
);


const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;