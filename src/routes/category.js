const { Router } = require('express');

const router = Router();

const categorie = require('../database/controller/categoryController');
const validateToken = require('../database/middlewares/ValidateToken');
const validateNameCategory = require('../database/middlewares/ValidateNameCategory');

router.post('/', validateToken.validate, validateNameCategory, categorie.create);

module.exports = router;