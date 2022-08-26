const { Router } = require('express');
const loginController = require('../database/controller/loginController');
const validateLogin = require('../database/middlewares/validateLogin');

const router = Router();

router.post('/', validateLogin, loginController.login);

module.exports = router;