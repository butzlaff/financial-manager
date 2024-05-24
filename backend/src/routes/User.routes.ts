import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/User.controller';

const router = Router();

const userController = new UserController();

router.post('/', (req: Request, res: Response) => userController.Create(req, res));

export default router;