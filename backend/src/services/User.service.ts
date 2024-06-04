import * as bcrypt from 'bcryptjs';
import { BadRequestError } from '../errors/ApiError';
import { UserModel } from '../models/User.model';
import { User, UserLogin, UserLoginSchema, UserSchema } from '../types/User';
import JWT from '../utils/JWT';

export class UserService {
  constructor(
    private userModel: UserModel = new UserModel(),
  ) { }

  async Create(user: User): Promise<User> {
    try {
      const isValidUuser = UserSchema.safeParse(user);

      if (isValidUuser.error) throw new BadRequestError('Invalid user data');

      const { email, password, name } = isValidUuser.data;

      const userExists = await this.userModel.findUserByEmail({ email });

      if (userExists) throw new BadRequestError('User already exists');

      const userCreated = await this.userModel.Create({ email, password, name });

      return userCreated;
    } catch (error) {
      throw new BadRequestError('Invalid user data');
    }

  }

  async Login(user: UserLogin): Promise<string | null> {
    try {
      const validUser = UserLoginSchema.safeParse(user);
      if (validUser.error) return null;

      const { email, password } = validUser.data;

      const userData = await this.userModel.findUserByEmail({ email });

      if (!userData) return null;

      const isPasswordValid = bcrypt.compareSync(password, userData.password);
      if (!isPasswordValid) return null;

      return JWT.sign({ email });
    } catch (e) {
      return null;
    }
  }

}