'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      sellerId: {
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
      },
      deliveryAddress: {
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        type: Sequelize.STRING,
      },
      saleDate: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};