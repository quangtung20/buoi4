import express from 'express'
import { BlogCtrl } from '../controllers/blog.controller';
import { checkAdminRole, checkUserRole } from '../middlewares/auth.middleware';

export const router = express.Router();

router.post('/',checkAdminRole,BlogCtrl.createBlog);
router.get('/',checkUserRole,BlogCtrl.getAllBlog);
router.put('/:id',async (req,res)=>{})
router.delete('/:id')


export default router;