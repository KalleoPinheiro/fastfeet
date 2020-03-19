import { Sequelize, ConnectionRefusedError } from 'sequelize';

import databaseConfig from '@configs/database';
import ErrorHanddler from '@app/errors/error-handdler';

const {
  dialect,
  username,
  password,
  host,
  port,
  database,
  define,
} = databaseConfig;

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  async init(): Promise<any> {
    this.connection = new Sequelize(
      `${dialect}://${username}:${password}@${host}:${port}/${database}`,
      { define }
    );
  }
}
export default new Database();
