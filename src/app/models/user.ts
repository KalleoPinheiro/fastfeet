import { hash } from 'bcrypt';
import { DataTypes } from 'sequelize';

import Database from '@database/index';

import { StaticModel } from '@typings/static-model';

import { IUser } from '@utils/interfaces/user';

const User = Database.connection.define('users', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.VIRTUAL,
  },
  passwordHash: {
    type: DataTypes.STRING,
  },
}) as StaticModel<IUser>;

User.addHook('beforeSave', async (user: IUser) => {
  if (user.password) {
    user.passwordHash = await hash(user.password, 8);
  }
});

export default User;
