const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!regex.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

module.exports = validateEmail;