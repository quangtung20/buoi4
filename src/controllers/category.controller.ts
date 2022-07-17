import {Request, Response} from 'express'
import { Blogs } from '../models/blog.model'
import { Categories } from '../models/category.model';


export const CategoryController = {
    createCategory:async(req:Request, res:Response)=>{
        const newBlog = await Categories.create(req.body);
        res.status(201).json(newBlog);
    },
    
    getAllCategory:async(req:Request, res:Response)=>{
        const blogs = await Categories.find().populate('blogs','title -_id');
        res.status(200).json(blogs);
    }
}