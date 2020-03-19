module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('recipients', {
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
      street: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      number: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      complement: {
        type: Datatypes.STRING,
        allowNull: true,
      },
      state: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      city: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      country: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      zip_code: {
        type: Datatypes.INTEGER,
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
    return queryInterface.dropTable('recipients');
  },
};
