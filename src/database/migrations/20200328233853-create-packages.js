module.exports = {
  up: (queryInterface, Datatypes) => {
    return queryInterface.createTable('packages', {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      recipient_id: {
        type: Datatypes.INTEGER,
        references: {
          model: 'recipients',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
      },
      deliveryman_id: {
        type: Datatypes.INTEGER,
        references: {
          model: 'deliverers',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
      },
      signature_id: {
        type: Datatypes.INTEGER,
        references: {
          model: 'files',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
      },
      product: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      canceled_at: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      start_date: {
        type: Datatypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: Datatypes.DATE,
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
    return queryInterface.dropTable('packages');
  },
};
