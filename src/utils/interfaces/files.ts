import { Model } from 'sequelize';

export interface IFiles extends Model {
  readonly id?: number;
  readonly name: string;
  readonly path: string;
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
}
