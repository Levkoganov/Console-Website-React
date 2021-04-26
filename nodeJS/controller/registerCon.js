const joiAuth = require('../config/joi');
const bcrypt = require('../config/bcrypt');
const addUser = require('../models/createUser');

const registerPost = async (req, res) => {
  const { name, email } = req.body;
  const emailError = [];

  try {
    // CHECK USER INPUT
    let data = await joiAuth.validateInputAsync(req.body);

    // HASH PASSWORD
    let hashPassword = await bcrypt.generatePassword(data.password);

    // CHECKING FOR EXISTED EMAIL
    let checkEmail = await addUser.findOne({ email: data.email });

    if (checkEmail) {
      emailError.push('Email is already registerd');
      return res.send({ catchErrors: emailError });
    } else {
      // INSERTING USER INTO THE DATABASE
      const newUser = new addUser({
        name,
        email,
        password: hashPassword,
      });

      newUser.save();
      res.send({ sendUser: data });
    }
  } catch (err) {
    if (emailError != 'Email is already registerd') {
      let errors = err.details.map((item) => item.message);
      res.send({ catchErrors: errors });
    }
  }
};

module.exports.registerPost = registerPost;
