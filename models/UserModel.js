import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min:2,
    max:50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max:50
  },
  password: {
    type: String,
    required: true,
  },
  mobile:{
    type:Number,
    required: true,
  },
  coordinator:{
    type:Boolean,
    default: false,
  },
  paymentString:{
    type:String,
  }
  ,
  isVerified:{
    type:Boolean,
    required: true,
    default: false,
  },
  isAdmin:{
    type:Boolean,
    required: true,
    default: false,
  }
  ,isAvailable:{
    type:Boolean,
    default: true
  },
  cart: {
    item: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  token:{
    type:String,
    default:null,
  }
},{timeStamp:true});


const User = mongoose.model("User",userSchema)

export default User




