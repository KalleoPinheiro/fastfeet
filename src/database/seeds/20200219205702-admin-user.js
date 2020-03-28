const { hashSync } = require('bcrypt');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          admin: true,
          password_hash: hashSync('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kalléo Pinheiro',
          email: 'kalleopinheiro@hotmail.com',
          admin: false,
          password_hash: hashSync('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
