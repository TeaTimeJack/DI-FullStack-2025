const { Router } = require("express");
const {tryLogin} = require("../controllers/loginControlls.js");

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]
  if (!token) return res.sendStatus(403)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


// LEARN MORE ABOUT REFRESH TOKENS
// const refreshAccessToken = (req, res) => {
//   const refreshToken = req.cookies.refreshToken
//   if (!refreshToken) return res.sendStatus(403)

//   jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const newAccessToken = jwt.sign(
//       { userId: user.userId },
//       process.env.JWT_SECRET,
//       { expiresIn: "15m" },
//     )
//     res.json({ accessToken: newAccessToken })
//   })
// }

const router = Router();
router.use(authenticateToken)

router.post("login", tryLogin);

module.exports = router;
