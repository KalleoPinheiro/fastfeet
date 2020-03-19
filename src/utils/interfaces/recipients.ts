import { Model } from 'sequelize';
import { States } from '@utils/enums/states';

export interface IRecipients extends Model {
  readonly id?: number;
  readonly name: string;
  readonly street: string;
  readonly number: string;
  readonly complement?: string;
  readonly state: States;
  readonly city: string;
  readonly country: string;
  readonly zip_code: number;
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
}
