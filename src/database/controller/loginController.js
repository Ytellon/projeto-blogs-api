const jwt = require('jsonwebtoken');

require('dotenv').config();

const wordSecretJwt = process.env.JWT_SECRET;

const loginService = require('../services/loginService');

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
      const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
      const token = jwt.sign({ data: user }, wordSecretJwt, jwtConfig);
      res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = loginController;
