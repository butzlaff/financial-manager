import { Category } from '@prisma/client';
import CategoryModel from '../models/Category.model';


export default class CategoryService {
  constructor(
    private categoryModel: CategoryModel = new CategoryModel()
  ) { }

  async Create(category: Category): Promise<Category> {
    const categoryCreated = await this.categoryModel.Create(category);

    return categoryCreated;
  }

  async FindAll(): Promise<Category[]> {
    const categories = await this.categoryModel.FindAll();

    return categories;
  }

  async FindById(id: number): Promise<Category | null> {
    const category = await this.categoryModel.FindById(id);

    return category;
  }
}