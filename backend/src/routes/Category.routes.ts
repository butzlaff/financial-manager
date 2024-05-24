import { Request, Response, Router } from 'express';
import { CategoryController } from '../controllers/Category.controller';

const router = Router();

const categoryController = new CategoryController();

router.get('/', (_req: Request, res: Response) => categoryController.FindAll(_req, res));
router.get('/:id', (_req: Request, res: Response) => categoryController.FindById(_req, res));
router.post('/', (req: Request, res: Response) => categoryController.Create(req, res));

export default router;
