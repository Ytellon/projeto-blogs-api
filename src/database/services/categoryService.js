const { Category } = require('../models');

const categorieService = {
    create: async ({ name }) => {
        const category = await Category
            .findOne({ where: { name } });
        if (category) {
            return { message: 'Category already registered' };
        }
        const newCategory = await Category.create({ name });
        return newCategory;
    },
    getCategory: async () => {
        const categories = await Category.findAll();
        return categories;
    },
};

module.exports = categorieService;