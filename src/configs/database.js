require('dotenv/config');

module.exports = {
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_NAME,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  dialect: 'postgres',
  define: { timestamps: true, underscored: true, underscoredAll: true },
};
