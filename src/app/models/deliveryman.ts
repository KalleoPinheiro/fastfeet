import Database from '@database/index';
import { StaticModel } from '@typings/static-model';
import { IDeliverers } from '@utils/interfaces/deliveryman';
import { DataTypes } from 'sequelize';
import File from './file';

const Deliveryman = Database.connection.define('deliverers', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  avatar_id: {
    type: DataTypes.INTEGER,
  },
}) as StaticModel<IDeliverers>;

Deliveryman.belongsTo(File, {
  foreignKey: 'avatar_id',
  as: 'avatar',
});

export default Deliveryman;
