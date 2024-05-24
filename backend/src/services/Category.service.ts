import { Category } from '@prisma/client';
import { CategoryModel } from '../models/Category.model';
import { CategoryCreated } from '../types/Category';


export class CategoryService {
  constructor(
    private categoryModel: CategoryModel = new CategoryModel()
  ) { }

  async Create(category: Category): Promise<CategoryCreated> {
    const categoryCreated = await this.categoryModel.Create(category);

    return categoryCreated;
  }
}