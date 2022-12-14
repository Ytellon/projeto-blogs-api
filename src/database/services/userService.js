const { User } = require('../models');

const userService = {
    userCreate: async ({ displayName, email, password, image }) => {
        const user = await User.findOne({ where: { email } });
        if (user) {
            return { message: 'User already registered' };
        }
        const newUser = await User.create({ displayName, email, password, image });
        return newUser;
    },
    getUsers: async () => {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        return users;
    },
    getUsersId: async (id) => {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        return user;
    },
};

module.exports = userService;