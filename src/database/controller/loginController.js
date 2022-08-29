const loginService = require('../services/loginService');
const tokenFBI = require('../utils/tokenFBI');

const loginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await loginService.searchUser({ email, password });

      if (!user || user.password !== password) {
        return res
          .status(400)
          .json({ message: 'Invalid fields' });
    }
    const token = tokenFBI(user);

      res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = loginController;
