import { prisma } from '../utils/prisma';


export default class ExpenseModel {
  async Create(expense: any) {
    const expenseData = await prisma.expense.create({
      data: {
        ...expense
      }
    });

    return expenseData;
  }
}