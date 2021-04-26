const jwt = require('../config/jwt');

const authMW = (req, res, next) => {
  jwt
    .verifyToken(req.headers.token)
    .then(() => {
      console.log('good token');
      next();
    })
    .catch(() => {
      console.log('bad token');
      res.send({ noToken: 'Token must be provided' });
    });
};

module.exports.authMW = authMW;
