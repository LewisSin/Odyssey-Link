const jwt = require('jsonwebtoken');
const User = require('../Models/user.model'); // Adjust the path as needed

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // This could be part of your auth.middleware.js or a separate utility file
const someRoleCheckFunction = (userRole, actionRequiredRole) => {
  const roles = ['admin', 'editor', 'user']; // Example roles in order of permissions
  return roles.indexOf(userRole) >= roles.indexOf(actionRequiredRole);
};


  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403);

    // Fetch the user by ID decoded from the token to check for roles
    const user = await User.findById(decoded.userId);
    if (!user) return res.sendStatus(404);

    req.user = user;

    // Inside authenticateToken, after you've set req.user
if (req.user && someRoleCheckFunction(req.user.role, 'admin')) {
  next();
} else {
  return res.status(403).json({ message: 'Not authorized for this action' });
}

    next();
  });
};

module.exports = { authenticateToken };
