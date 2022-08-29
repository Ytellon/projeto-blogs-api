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
};

module.exports = categorieService;