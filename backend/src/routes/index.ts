import { Router } from 'express';
import categoryRouter from './Category.routes';
import userRouter from './User.routes';

const router = Router();
router.use('/user', userRouter);
router.use('/category', categoryRouter);

export default router;