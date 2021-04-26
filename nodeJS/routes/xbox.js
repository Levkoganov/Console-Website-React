const express = require('express');
const router = express.Router();
const xboxController = require('../controller/xboxCon');
const authMW = require('../middleware/authMW');

router.get('/', authMW.authMW, xboxController.xbox);

module.exports = router;
