'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller_id'
      },
      productServiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_service_id'
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'customer_id'
      },
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'store_id'
      },
      soldAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'sold_amount'
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};