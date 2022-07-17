import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

    title:{
        unique:true,
        type:String,
    },

    content:{
        type:String,
    },

    image:{
        type:String,
    },

    category:{ 
        type: mongoose.Types.ObjectId, ref: 'categories' 
    }

},{
    timestamps:true,
})

export const Blogs = mongoose.model('blogs',blogSchema);