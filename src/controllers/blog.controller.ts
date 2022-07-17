import {Request, Response} from 'express'
import { Blogs } from '../models/blog.model'
import { Categories } from '../models/category.model';


export const BlogCtrl = {
    createBlog:async(req:Request, res:Response)=>{
        try {
            const check = await Blogs.findOne({title:req.body.title});
            if(check){
                throw new Error('blog has been exist');
            }
            const category = await Categories.findById(req.body.category); // vi luu theo object so chan chan hon luu theo

            const newBlog = await Blogs.create({...req.body,category:category}); // luu blog lai
            await Categories.findOneAndUpdate({_id:category._id},{ // sau khi luu blog thi phai them blog vao category cua blog do
                $push:{blogs:newBlog},
            },{new:true});
            res.status(201).json(newBlog);
        } catch (error:any) {
            console.log(error.message);
            res.status(400).json(error.message);
        }
    },
    
    getAllBlog:async(req:Request, res:Response)=>{
        const blogs = await Blogs.find().populate('category','-_id title');
        res.status(200).json(blogs);
    }
}