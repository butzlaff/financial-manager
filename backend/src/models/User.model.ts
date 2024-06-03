import { User } from '../types/User';
import { prisma } from '../utils/prisma';


export class UserModel {

  async Create(user: User): Promise<User> {
    const userCreated = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return userCreated;
  }

  async Login(user: Pick<User, 'email' | 'password'>): Promise<User | null> {
    const userLogged = await prisma.user.findFirst({
      where: {
        email: user.email,
        password: user.password,
      },
    });

    return userLogged;
  }
}