import * as mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    }
})

export const Users = mongoose.model('categories',categorySchema);