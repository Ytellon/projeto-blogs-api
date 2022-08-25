'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const category = await queryInterface.createTable("Categories", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING(255), allowNull: false },
    });
    return category;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Categories");
  }
};
