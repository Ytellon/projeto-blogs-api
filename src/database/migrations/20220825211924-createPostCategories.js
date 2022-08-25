'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postCategory = await queryInterface.createTable("PostCategories", {
      postId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'BlogPosts', key: 'id' } },
      categoryId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Categories', key: 'id' } },
    });
    return postCategory;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostCategories");
  }
};
