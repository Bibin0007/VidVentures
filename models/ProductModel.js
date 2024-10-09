import mongoose from "mongoose"





const productSchema = new mongoose.Schema({


    name:{
        type:String,
        
    },
    description:{
        type:String,
    },
    mrp:{
        type:Number,
        
    }, 
    discountedPrice:{
        type:String,
        
    },
    list:{
      type:Array,
      
    },
    image:{
        type:String,
        
    },
    isAvailable:{
        type:Boolean,
        
        default:false,
    },
    sdescription:{
      type:String,
      
    },
    showInBanner:{
      type:Boolean,
    }

})


const ProductModel = mongoose.module("ProductModel",productSchema)

export default ProductModel