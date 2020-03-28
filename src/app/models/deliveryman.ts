import Database from '@database/index';
import { StaticModel } from '@typings/static-model';
import { ICouriers } from '@utils/interfaces/deliveryman';
import { DataTypes } from 'sequelize';
import File from './file';

const Deliveryman = Database.connection.define('couriers', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  avatar_id: {
    type: DataTypes.INTEGER,
  },
}) as StaticModel<ICouriers>;

Deliveryman.belongsTo(File, {
  foreignKey: 'avatar_id',
  as: 'avatar',
});

export default Deliveryman;
