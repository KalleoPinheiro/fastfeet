import { DataTypes } from 'sequelize';

import Database from '@database/index';

import { StaticModel } from '@typings/static-model';

import { IRecipients } from '@utils/interfaces/recipients';
import { States } from '@utils/constants/states';

const Recipients = Database.connection.define('recipients', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.ENUM({ values: States.map(state => state.name) }),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}) as StaticModel<IRecipients>;

export default Recipients;
