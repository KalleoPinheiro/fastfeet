module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('files', {
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
      path: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
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
    return queryInterface.dropTable('files');
  },
};
