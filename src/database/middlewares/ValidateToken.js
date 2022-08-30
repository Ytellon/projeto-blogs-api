const jwt = require('jsonwebtoken');

require('dotenv').config();

const wordSecretJwt = process.env.JWT_SECRET;

const { User } = require('../models');

const validateToken = {
    validate: async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        try {
            const decoded = jwt.verify(token, wordSecretJwt);
            const user = await User.findOne({ where: { id: decoded.data.id } });
            if (!user) {
                return res.status(401).json({ message: 'Expired or invalid token' });
            }
            req.user = user;

            next();
        } catch (err) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
    },
};

module.exports = validateToken;