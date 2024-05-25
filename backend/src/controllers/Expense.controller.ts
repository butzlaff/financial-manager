import { Request, Response } from 'express';
import ExpenseService from '../services/Expense.service';


export default class ExpenseController {
  constructor(
    private readonly expenseService: ExpenseService = new ExpenseService(),
  ) {

  }
  async Create(req: Request, res: Response) {
    const body = req.body;
    const expense = await this.expenseService.Create(body);

    return res.status(201).json(expense);
  }
}