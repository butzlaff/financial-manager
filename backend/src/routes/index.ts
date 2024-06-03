import { Router } from 'express';
import authRouter from './Auth.routes';
import categoryRouter from './Category.routes';
import expenseRouter from './Expense.routes';
import userRouter from './User.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/category', categoryRouter);
router.use('/expense', expenseRouter);

export default router;