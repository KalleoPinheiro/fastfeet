import { Model } from 'sequelize';

export interface IUser extends Model {
  readonly id?: number;
  readonly name: string;
  readonly email: string;
  readonly password?: string;
  passwordHash: string;
  readonly createdAt?: string | Date;
  readonly updatedAt?: string | Date;
}
