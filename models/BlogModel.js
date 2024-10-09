import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    author:{
        type: 'String',
        required: true
    },
    image:{
       type:"String", 
    },
    caption:{
        type:"String", 
     },
    heading:{
        type:"String", 
     },
     
    isAvailable:{
        type:"Boolean",
        default: false
    },
    content:{
        type:"String",
        required: true
    }
});

const BlogModel = mongoose.model("BlogModel",blogSchema)

export default BlogModel