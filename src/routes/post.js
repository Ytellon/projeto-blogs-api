const { Router } = require('express');

const validateToken = require('../database/middlewares/ValidateToken');
const postController = require('../database/controller/postController');
const validatePost = require('../database/middlewares/ValidatePost');

const router = Router();

router.post('/', validateToken.validate, validatePost, postController.create);

router.get('/', validateToken.validate, postController.getAllPosts);

router.get('/:id', validateToken.validate, postController.getAllPostsId);

module.exports = router;