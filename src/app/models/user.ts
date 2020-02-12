import { DataTypes } from 'sequelize';

import Database from '@database/index';

import { StaticModel } from '@typings/static-model';

import { IUser } from '@utils/interfaces/user';

const User = Database.connection.define('users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
}) as StaticModel<IUser>;

export default User;
