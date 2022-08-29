const jwt = require('jsonwebtoken');

require('dotenv').config();

const wordSecretJwt = process.env.JWT_SECRET;

const createToken = (payload) => {
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
      const token = jwt.sign({ data: payload }, wordSecretJwt, jwtConfig);
        return token;
};

module.exports = createToken;