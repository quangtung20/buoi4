import express from 'express'
import { BlogCtrl } from '../controllers/blog.controller';

export const router = express.Router();

router.post('/',BlogCtrl.createBlog);
router.get('/',BlogCtrl.getAllBlog);
router.put('/:id',)
router.delete('/:id')


export default router;