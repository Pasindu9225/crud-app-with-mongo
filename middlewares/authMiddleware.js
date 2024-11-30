const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token not found" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("the decode user is :", req.user);
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Authorization header not found" });
  }
};

module.exports = verifyToken;
