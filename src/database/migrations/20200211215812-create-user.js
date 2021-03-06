module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('users', {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      email: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
      },
      admin: {
        type: Datatypes.BOOLEAN,
        defaulValue: false,
        allowNull: false,
      },
      password_hash: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Datatypes.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
