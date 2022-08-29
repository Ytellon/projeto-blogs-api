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
};

module.exports = userService;