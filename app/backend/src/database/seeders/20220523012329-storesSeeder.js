module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'stores',
      [
        {
          name: 'Mega Car',
          city: 'Cuiabá',
          state: 'MT'
        },
        {
          name: 'Mega Car',
          city: 'Belo Horizonte',
          state: 'MG',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('stores', null, {});
  },
};
