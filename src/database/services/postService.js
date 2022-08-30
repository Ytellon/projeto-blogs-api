const { BlogPost, PostCategory, Category, sequelize } = require('../models');

const postService = {
create: async ({ title, content, categoryIds, userId }) => {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
    if (count !== categoryIds.length) {
        return { message: '"categoryIds" not found' };
    }
    const newCreatePost = await sequelize.transaction(async (t) => {
        const { dataValues } = await BlogPost
          .create({ title, content, userId }, { transaction: t });
        const postCategories = categoryIds
          .map((categoryId) => ({ postId: dataValues.id, categoryId }));
        await PostCategory.bulkCreate(postCategories, { transaction: t });
        return dataValues;
    });
    return newCreatePost;
},
};

module.exports = postService;