import { databaseConfig } from '@configs/database';
import { Sequelize } from 'sequelize';

const { dialect, username, password, host, port, database } = databaseConfig;

class Database {
  connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(
      `${dialect}://${username}:${password}@${host}:${port}/${database}`
    );
  }
}
export default new Database();
