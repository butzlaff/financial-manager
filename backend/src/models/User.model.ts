import * as bcrypt from 'bcryptjs';
import { User } from '../types/User';
import { prisma } from '../utils/prisma';
export class UserModel {

  async Create(user: User): Promise<User> {
    const userCreated = await prisma.user.create({

      data: {
        name: user.name,
        email: user.email,
        password: bcrypt.hashSync(user.password, 10)
      },
    });

    return userCreated;
  }

  async findUserByEmail({ email }: { email: string }): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}