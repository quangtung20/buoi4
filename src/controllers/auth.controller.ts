import {Request, Response} from 'express'
import { Users } from '../models/user.model'
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken' // b1

export const AuthCtrl = {
    register:async(req:Request,res:Response)=>{
        const {email,password} = req.body; // object detructoring
        console.log('before hash',password);
        const hashPassword = await bcrypt.hash(password,12);
        console.log('after hash',hashPassword);

        const user = await Users.create({...req.body,password:hashPassword});
        const accessToken = await jwt.sign({_id:user._id},process.env.SECRET_KEY,{ //b2 sign user bang truong userid
            expiresIn: '1d'
        })

        res.cookie('accesstoken',accessToken,{ //b3 gan accessToken len cookie
            httpOnly:true,
            path:'/',
            maxAge:30*24*60*60*1000,
        })

        res.status(201).json({username:user.username}); // user:user, password:'
    },

    login:async(req:Request,res:Response)=>{
        const {email,password} = req.body; //password:123456
        const user = await Users.findOne({email:email});
        if(!user){
            res.status(400).json('email nay chua dang ki');
        }

        const checkPassword = await bcrypt.compare(password,user.password);// $2a$12$PcJhO2M6xQpciZ8SJHdWv.ZeXww6SJibIhQqdNkQW3tq9IQy4L1Xu
        if(!checkPassword){
            res.status(400).json('mat khau khong dung');
        }
        const accessToken = await jwt.sign({_id:user._id},process.env.SECRET_KEY,{
            expiresIn: '1d'
        })

        res.cookie('accesstoken',accessToken,{
            httpOnly:true,
            path:'/',
            maxAge:30*24*60*60*1000,
        })
        res.status(200).json({username:user.username});
    },

    logout:async(req:Request, res:Response)=>{
        res.clearCookie('accesstoken',{
            path:'/',
        });

        res.status(200).json('logout successfully');
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

    // learnSearch:async(req:Request, res:Response) => {

    //     // const users = await Users.find({username:/nam/}); // /regex/
    //     // const users = await Users.find({age:{$gte:21}}); // /lt,gt,lte,gte/
    //     // const users = await Users.find().where({username:'tung5'}); // /lt,gt,lte,gte/
    //     // const users = await Users.find({
    //     //     $or:[
    //     //         {username:'tung'},
    //     //         {age:25}
    //     //     ]
    //     // }) // $or
    //     // const users = await Users.find().skip(1).limit(2) // skip, limit
    //     // const users = await Users.find().sort({age:-1}) // sort
    //     // const users = await Users.find(
    //     //     {age:{$in:[20,21,22]}} // $in
    //     // ) 
    //     // console.log(users)
    //     // res.json(users);
    // },

    learnSearch:async(req:Request, res:Response) => {
        const users = await Users.find().skip(5).limit(5);
        res.json(users);
    }

}