const { Router } = require('express');

const router = Router();

const userController = require('../database/controller/userController');
const validateDisplay = require('../database/middlewares/ValidateDisplayName');
const validateEmail = require('../database/middlewares/ValidateEmail');
const validatePassword = require('../database/middlewares/ValidatePassword');
const validateToken = require('../database/middlewares/ValidateToken');

router.post('/', validateDisplay, validateEmail, validatePassword, userController.userCreate);

router.get('/', validateToken.validate, userController.getUsers);

router.get('/:id', validateToken.validate, userController.getUsersId);

module.exports = router;