const fakeProductsServices = require('../databaseMocks/fakeProductsServices');

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'products_services',
      fakeProductsServices,
      {},
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('products_services', null, {});
  },
};
