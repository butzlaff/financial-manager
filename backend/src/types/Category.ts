export type CategoryCreation = {
  name: string;
  description: string;
};

export interface Category extends CategoryCreation {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}