export type User = {
  name: string;
  email: string;
  password: string;
};

export interface UserCreated extends User {
  id: number;
}
