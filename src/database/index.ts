import databaseConfig from '@configs/database';
import { Sequelize } from 'sequelize';
import logger from '@logs/logger';
import HttpException from '@app/errors/exception';

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
    try {
      await this.connection.authenticate();
      logger.info('Connection has been established successfully.');
    } catch (error) {
      logger.error(
        new HttpException(500, 'Unable to connect to the database!', error)
      );
    }
  }
}
export default new Database();
