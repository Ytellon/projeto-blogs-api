const { BlogPost, PostCategory, Category, sequelize, User } = require('../models');

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
getAllPosts: async () => {
    const getPosts = await BlogPost.findAll({
        include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });
    return getPosts;
},
getAllPostsId: async (id) => {
    const getPostsId = await BlogPost.findByPk(id, {
        include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });
    return getPostsId;
},
};

module.exports = postService;