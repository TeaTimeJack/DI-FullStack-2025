
const jwt = require('jsonwebtoken');
const {secretKey} = require("./auth")

// Secret key for JWT verification (must match the key used for signing)
// const secretKey = 'mysecretkey';
console.log(secretKey);

// Middleware function to verify JWTs
function authenticateJWT(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token verification failed' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateJWT;