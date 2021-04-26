const express = require('express');
const router = express.Router();

const registerController = require('../controller/registerCon');
const loginController = require('../controller/loginCon');

router.post('/register', registerController.registerPost);
router.post('/login', loginController.loginPost);

module.exports = router;
