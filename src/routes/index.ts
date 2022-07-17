import express from 'express'
import userRouter from './user.route'
import authRouter from './auth.route'
import blogRouter from './blog.route'
import categoryRouter from './category.route'


const router = express.Router()

router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/blog',blogRouter);
router.use('/category',categoryRouter);

export default router