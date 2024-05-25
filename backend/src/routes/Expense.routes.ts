import { Request, Response, Router } from 'express';
import ExpenseController from '../controllers/Expense.controller';

const router = Router();

const expenseController = new ExpenseController();

router.post('/', (req: Request, res: Response) => expenseController.Create(req, res));

export default router;
