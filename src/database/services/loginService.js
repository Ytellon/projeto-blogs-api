const { User } = require('../models');

const loginService = {
  searchUser: async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    return user;
  },
};

module.exports = loginService;
