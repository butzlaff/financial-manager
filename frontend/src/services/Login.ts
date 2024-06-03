import { ILogin } from '@/contracts/ILogin';

export class Login implements ILogin {
  login(): void {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    throw new Error('Method not implemented.');
  }
}