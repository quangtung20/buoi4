import {Request, Response} from 'express'
import { Users } from '../models/user.model'

export const AuthCtrl = {
    register:async(req:Request,res:Response)=>{
        const user = await Users.create(req.body);
        res.json({...user._doc, password:''});
    },

    getAllUsers:async(req:Request, res:Response) => {
        const users = await Users.find({username:/nam/});
        res.json(users);
    },


    getUserById:async(req:Request, res:Response) => {
        const user = await Users.findById(req.params.id);
        res.json(user);
    },

    updateUser:async(req:Request, res:Response) => {
        const user = await Users.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true});
        res.json(user);
    },

    deleteUser:async(req:Request, res:Response) => {
        const user = await Users.findOneAndDelete({_id:req.params.id});
        res.json('delete success');
    },

    learnSearch:async(req:Request, res:Response) => {

        // const users = await Users.find({username:/nam/}); // /regex/
        // const users = await Users.find({age:{$gte:21}}); // /lt,gt,lte,gte/
        // const users = await Users.find().where({username:'tung5'}); // /lt,gt,lte,gte/
        // const users = await Users.find({
        //     $or:[
        //         {username:'tung'},
        //         {age:25}
        //     ]
        // }) // $or
        // const users = await Users.find().skip(1).limit(2) // skip, limit
        // const users = await Users.find().sort({age:-1}) // sort
        // const users = await Users.find(
        //     {age:{$in:[20,21,22]}} // $in
        // ) 
        // console.log(users)
        // res.json(users);
    },


}