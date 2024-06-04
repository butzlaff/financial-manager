import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/User.controller';

const router = Router();

const userController = new UserController();

router.post('/signin', (req: Request, res: Response) => userController.Login(req, res));

export default router;