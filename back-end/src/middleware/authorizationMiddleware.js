const User = require("../models/userModels");

function authorizeRole(...roles) {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ msg: "user not found" });
      }

      const userRole = String(user.userRole).trim();
      const allowedRoles = roles.map((r) => String(r).trim());

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ msg: "user has no access" });
      }

      next();
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
}

module.exports = { authorizeRole };
