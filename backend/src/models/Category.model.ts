import { Category, CategoryCreation } from '../types/Category';
import { prisma } from '../utils/prisma';


export default class CategoryModel {
  public async Create(category: CategoryCreation): Promise<Category> {
    const categoryCreated = await prisma.category.create({
      data: {
        name: category.name,
        description: category.description,
      },
    });

    return categoryCreated;
  }

  async FindAll(): Promise<Category[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }

  async FindById(id: number): Promise<Category | null> {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  async Update(id: number, category: CategoryCreation): Promise<CategoryCreation | null> {
    const categoryUpdated = await prisma.category.update({
      where: {
        id,
      },
      data: {
        ...category
      },
    });

    return categoryUpdated;
  }

  async Delete(id: number): Promise<CategoryCreation | null> {
    const categoryDeleted = await prisma.category.delete({
      where: {
        id,
      },
    });

    return categoryDeleted;
  }
}