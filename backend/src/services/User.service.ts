import { UserModel } from '../models/User.model';
import { User } from '../types/User';


export class UserService {
  constructor(
    private userModel: UserModel = new UserModel()
  ) { }

  async Create(user: User): Promise<User> {
    const userCreated = await this.userModel.Create(user);

    return userCreated;
  }
}