const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // List of paths that do not require authentication
  const exemptRoutes = [
    { path: "/api/auth/login", method: "POST" },
    { path: "/api/auth/register", method: "POST" },
  ];

  // Check if the current request matches an exempt route
  const isExempt = exemptRoutes.some(
    (route) => req.path === route.path && req.method === route.method
  );

  if (isExempt) {
    return next(); // Skip authentication
  }

  // Get token from header
  const token = req.header("Authorization")?.split(" ")[1];

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
