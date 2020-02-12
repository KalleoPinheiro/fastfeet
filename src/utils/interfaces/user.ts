import { Model } from 'sequelize';

export interface IUser extends Model {
  readonly name: string;
  readonly email: string;
}
