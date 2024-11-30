const { all } = require("../routs/product routers/product.rout");

const authorizeRoles =
  (...roles) =>
  (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    next();
  };

module.exports = authorizeRoles;
