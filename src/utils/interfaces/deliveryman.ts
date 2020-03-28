import {
  Model,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  Association,
} from 'sequelize';

export interface ICouriersInstance extends Association<ICouriers>, ICouriers {
  avatar: ICouriersInstance;
  getAvatar: BelongsToGetAssociationMixin<ICouriersInstance>;
  setAvatar: BelongsToSetAssociationMixin<ICouriersInstance, number>;
  createAvatar: BelongsToCreateAssociationMixin<ICouriers>;
}

export interface ICouriers extends Model {
  readonly id?: number;
  readonly name: string;
  readonly email: string;
  readonly avatar_id?: number;
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
}
