import Database from '@database/index';
import { StaticModel } from '@typings/static-model';
import { IUser } from '@utils/interfaces/user';
import { hash } from 'bcrypt';
import { DataTypes } from 'sequelize';

const User = Database.connection.define('users', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: DataTypes.VIRTUAL,
  },
  password_hash: {
    type: DataTypes.STRING,
  },
}) as StaticModel<IUser>;

User.addHook('beforeSave', async (user: IUser) => {
  if (user.password) {
    user.password_hash = await hash(user.password, 8);
  }
});

export default User;
