import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';

export class CategoryController {
  async Create(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const user = await prisma.category.create({
      data: {
        name: body.name,
        description: body.description,
        user: { connect: { id: body.userId } },
        expenses: { create: body.expenses },
      },
    });

    return res.status(201).json(user);
  }
}
