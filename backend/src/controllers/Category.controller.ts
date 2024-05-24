import { Request, Response } from 'express';
import CategoryService from '../services/Category.service';

export class CategoryController {
  constructor(
    private categoryService: CategoryService = new CategoryService()
  ) { }

  async Create(req: Request, res: Response): Promise<Response> {

    const body = req.body;

    const category = await this.categoryService.Create(body);

    return res.status(201).json(category);
  }

  async FindAll(_req: Request, res: Response): Promise<Response> {
    const categories = await this.categoryService.FindAll();

    return res.status(200).json(categories);
  }

  async FindById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const category = await this.categoryService.FindById(+id);

    return res.status(200).json(category);
  }
}
