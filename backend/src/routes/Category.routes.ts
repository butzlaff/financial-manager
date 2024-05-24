import { Router } from 'express';
import { CategoryController } from '../controllers/Category.controller';

const router = Router();

const userController = new CategoryController();

router.post('/', userController.Create);

export default router;
