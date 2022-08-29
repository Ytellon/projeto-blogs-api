const { Router } = require('express');

const router = Router();

const userController = require('../database/controller/userController');
const validateDisplay = require('../database/middlewares/ValidateDisplayName');
const validateEmail = require('../database/middlewares/ValidateEmail');
const validatePassword = require('../database/middlewares/ValidatePassword');

router.post('/', validateDisplay, validateEmail, validatePassword, userController.userCreate);

module.exports = router;