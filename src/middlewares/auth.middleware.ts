import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { Users } from "../models/user.model";
import { IDecodeToken, IUser } from "../utils/interface";
export const checkUserRole = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        //b1: lay token
        const token = req.header("Authorization");
        console.log(token);
        //b2: giai ma token
        const jwtVerify = await <IDecodeToken>jwt.verify(token,process.env.SECRET_KEY);
        // lay userId
        const userId = jwtVerify._id;
        // b3: lay user theo userId
        const user = await Users.findById(userId);
        if(user.role === "user" || user.role === "admin"){
            next();
        }else{
            throw new Error("you are not allowed to do this function");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const checkAdminRole = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        //b1: lay token
        const token = req.header("Authorization");
        console.log(token);
        //b2: giai ma token
        const jwtVerify = await <IDecodeToken>jwt.verify(token,process.env.SECRET_KEY);
        // lay userId
        const userId = jwtVerify._id;
        // b3: lay user theo userId
        const user = await Users.findById(userId);
        if(user.role === "admin"){
            next();
        }else{
            throw new Error("you are not allowed to do this function");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}
