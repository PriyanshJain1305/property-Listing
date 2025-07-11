const jwt = require("jsonwebtoken");
require('dotenv').config();

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Forbidden Invalid Token" });
        req.user = user;
        next();
    });
}

module.exports = authMiddleware;