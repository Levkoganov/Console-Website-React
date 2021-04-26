const express = require('express');
const router = express.Router();
const settingController = require('../controller/settingCon');
const authMW = require('../middleware/authMW');

router.post('/update', authMW.authMW, settingController.settingPost);

module.exports = router;
