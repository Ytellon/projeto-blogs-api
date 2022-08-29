const categorieService = require('../services/categoryService');

const categoryController = {
    create: async (req, res) => {
        try {
            const { name } = req.body;
            const category = await categorieService.create({ name });
            if (category.message) {
                return res.status(409).json({ message: category.message });
            }
            res.status(201).json(category);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
};

module.exports = categoryController;