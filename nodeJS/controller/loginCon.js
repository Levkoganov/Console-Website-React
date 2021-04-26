const joiAuth = require('../config/joi');
const bcrypt = require('../config/bcrypt');
const jwt = require('../config/jwt');
const addUser = require('../models/createUser');

const loginPost = async (req, res) => {
  const inputErrors = [];

  try {
    // CHECKING USER INPUT
    let inputData = await joiAuth.validateInputLoginAsync(req.body);

    // CHECKING IF EMAIL EXIST
    let checkCollection = await addUser.findOne({ email: inputData.email });

    // COMPARE PASSWORD
    if (checkCollection) {
      let passwordCheck = await bcrypt.checkPassword(
        inputData.password,
        checkCollection.password
      );

      if (passwordCheck) {
        // JWT;
        let token = await jwt.generateToken(inputData);
        res.send({ token: token, username: checkCollection.name });
      } else {
        inputErrors.push('Incorrect Password');
        return res.send({ catchErrors: inputErrors });
      }
    } else {
      inputErrors.push('Incorrect Email');
      return res.send({ catchErrors: inputErrors });
    }
  } catch (err) {
    if (
      inputErrors != 'Incorrect Password' ||
      inputErrors != 'Incorrect Email'
    ) {
      let errors = err.details.map((item) => item.message);
      console.log('JoiErrors: ', errors);
      res.send({ catchErrors: errors });
    } else {
      console.log('ctachERR:', err);
    }
  }
};

module.exports.loginPost = loginPost;

// req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
// console.log(req.session.cookie);
