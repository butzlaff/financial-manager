import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';

export class UserController {
  async Create(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });

    return res.status(201).json(user);
  }
}
