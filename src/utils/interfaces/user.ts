import { Model } from 'sequelize';

export interface IUser extends Model {
  readonly id?: number;
  readonly name: string;
  readonly email: string;
  readonly password?: string;
  password_hash: string;
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
}
