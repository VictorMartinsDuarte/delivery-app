'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  },
};
