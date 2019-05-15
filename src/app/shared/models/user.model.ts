import { UserSetting } from '../models';
import { Role } from './role.model';

export class User {
  id: number;
  role: Role;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  token?: string;
  expiresIn?: number;
  settings: UserSetting[];
}