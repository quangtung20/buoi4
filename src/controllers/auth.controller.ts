import {Request, Response} from 'express'
import { Users } from '../models/user.model'

export const AuthCtrl = {
    register:async(req:Request,res:Response)=>{
        const user = await Users.create(req.body);
        res.json({...user._doc, password:''});
    },

    getAllUsers:async(req:Request, res:Response) => {
        const users = await Users.find();
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
    }


}