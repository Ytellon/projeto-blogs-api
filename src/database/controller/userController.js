const tokenFBI = require('../utils/tokenFBI');
const userService = require('../services/userService');

const userController = {
    userCreate: async (req, res) => {
        try {
            const { displayName, email, password, image } = req.body;
            const user = await userService.userCreate({ displayName, email, password, image });
            if (user.message) {
                return res.status(409).json({ message: user.message });
            }
            const payload = { displayName, email, image };

            const token = tokenFBI(payload);

            res.status(201).json({ token });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getUsersId: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.getUsersId(id);
            if (!user) {
                return res.status(404).json({ message: 'User does not exist' });
            }
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
};

module.exports = userController;