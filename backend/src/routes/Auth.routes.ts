import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/User.controller';
import Validate from '../middlewares/Validate';

const router = Router();

const userController = new UserController();

router.post('/', Validate.validateToken, (req: Request, res: Response) => userController.Login(req, res));

export default router;