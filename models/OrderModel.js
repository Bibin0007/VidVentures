import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: {
    item: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          // required:true
        },
        qty: {
          type: Number,
          // required:true
        },
        price: {
          type: Number,
        },
        status: {
          type: String,
          default: null,
        },
        link: {
          type: String,
          default: null,
        },
        instruction: {
          script: {
            type: String,
          },
          voice: {
            type: String,
          },
          editing: {
            type: String,
          },
          thumbnail: {
            type: String,
          },
          channelname: {
            type: String,
          },
          niche: {
            type: String,
          },
          link: {
            type: String,
          },
          others: {
            type: String,
          },
        },
      },
    ],
    totalPrice: {
      type: String,
    },
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentString: {
    type: String,
  },
  addon: {
    type: Array,
  },
  address: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    line1: {
      type: String,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  orderTotal:{
    type: String,
  }
});


const OrderModel = mongoose.model("OrderModel",orderSchema)

export default OrderModel