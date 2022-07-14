import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required:true,
    },

    username:{
        type: String,
        unique:true,
        required:true,
    },

    password:{
        type: String,
        required:true,
    },

    age:{
        type:Number,
    }
})

export const Users = mongoose.model('users',userSchema)