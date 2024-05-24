export type Category = {
  name: string;
  description: string;
};

export interface CategoryCreated extends Category {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}