const postService = require('../services/postService');

const postController = {
    create: async (req, res) => {
        try {
            const { title, content, categoryIds } = req.body;
            const { id } = req.user;
            const post = await postService.create({ title, content, categoryIds, userId: id });
            if (post.message) {
                return res.status(400).json({ message: post.message });
            }
            return res.status(201).json(post);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getAllPosts: async (req, res) => {
        try {
            const posts = await postService.getAllPosts();
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
};

module.exports = postController;