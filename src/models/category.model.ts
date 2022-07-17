import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },

    // blogs:[{ type: mongoose.Types.ObjectId, ref: 'blogs' }],
    blogs:[{ type: mongoose.Types.ObjectId, ref: 'blogs' }],
})

export const Categories = mongoose.model('categories',categorySchema); // Categories la model de thao tac find delete voi csdl
// schema la cai khung