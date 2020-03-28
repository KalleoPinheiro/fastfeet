module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('couriers', {
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
      },
      avatar_id: {
        type: Datatypes.INTEGER,
        references: {
          model: 'files',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
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
    return queryInterface.dropTable('couriers');
  },
};
