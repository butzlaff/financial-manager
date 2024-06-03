import { Request, Response } from 'express';
import { UserService } from '../services/User.service';

export class UserController {
  constructor(
    private userService: UserService = new UserService()
  ) { }

  async Create(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const user = await this.userService.Create(body);

    return res.status(201).json(user);
  }

  async Login(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const user = await this.userService.Login(body);

    return res.status(200).json(user);
  }
}
