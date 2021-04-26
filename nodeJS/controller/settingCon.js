const addUser = require('../models/createUser');

const settingPost = (req, res) => {
  const { oldname, newname } = req.body;
  const inputErrors = [];

  // CHECK USER INPUT
  if (newname == '') {
    inputErrors.push('New username is empty');
    return res.send({ catchErrors: inputErrors });
  } else if (newname.length < 3) {
    inputErrors.push('New username is too short');
    return res.send({ catchErrors: inputErrors });
  } else if (newname.length > 9) {
    inputErrors.push('New username is too long');
    return res.send({ catchErrors: inputErrors });
  } else {
    addUser.findOneAndUpdate(
      { name: oldname },
      { name: newname },
      { new: true },
      (err, result) => {
        if (result == null) {
          console.log('error:', err);
        } else {
          console.log('success:', result);
          return res.send({ username: result.name });
        }
      }
    );
  }
};

module.exports.settingPost = settingPost;
