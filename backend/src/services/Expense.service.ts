import ExpenseModel from '../models/Expense.model';


export default class ExpenseService {
  constructor(
    private readonly expenseModel: ExpenseModel = new ExpenseModel()
  ) {
  }

  async Create(expense: any) {
    const expenseData = await this.expenseModel.Create(expense);

    return expenseData;
  }
}