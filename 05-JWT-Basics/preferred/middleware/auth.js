const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, name } = decoded;
        req.user = { id, name };
        next();
    } catch (error) {
        res.status(401).json({
            message: "Unauthorized access."
        });
    }
};

module.exports = authenticationMiddleware;