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
}