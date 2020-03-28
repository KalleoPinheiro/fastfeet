import {
  Model,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  Association,
} from 'sequelize';

export interface IDeliverersInstance
  extends Association<IDeliverers>,
    IDeliverers {
  avatar: IDeliverersInstance;
  getAvatar: BelongsToGetAssociationMixin<IDeliverersInstance>;
  setAvatar: BelongsToSetAssociationMixin<IDeliverersInstance, number>;
  createAvatar: BelongsToCreateAssociationMixin<IDeliverers>;
}

export interface IDeliverers extends Model {
  readonly id?: number;
  readonly name: string;
  readonly email: string;
  readonly avatar_id?: number;
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
}
