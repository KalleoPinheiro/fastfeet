import Database from '@database/index';
import { StaticModel } from '@typings/static-model';
import { IFiles } from '@utils/interfaces/files';
import { DataTypes } from 'sequelize';

const File = Database.connection.define('files', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}) as StaticModel<IFiles>;

export default File;
