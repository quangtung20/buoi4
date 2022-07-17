import express from 'express'
import { CategoryController } from '../controllers/category.controller';

export const router = express.Router();

router.post('/',CategoryController.createCategory);
router.get('/',CategoryController.getAllCategory);
router.put('/:id',)
router.delete('/:id')


export default router;