import 'dotenv/config';

const { PG_USER, PG_PASS, PG_NAME, PG_HOST, PG_DIALECT, PG_PORT } = process.env;

export const databaseConfig = {
  username: PG_USER || 'postgres',
  password: PG_PASS || 'postgres',
  database: PG_NAME || 'postgres',
  host: PG_HOST || 'localhost',
  port: PG_PORT || 5432,
  dialect: PG_DIALECT || 'postgres',
  define: { timestamps: true, underscored: true, underscoredAll: true },
};
