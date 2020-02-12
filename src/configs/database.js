module.exports = {
  username: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASS || 'postgres',
  database: process.env.PG_NAME || 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: process.env.PG_PORT || 5432,
  dialect: process.env.PG_DIALECT || 'postgres',
  define: { timestamps: true, underscored: true, underscoredAll: true },
};
