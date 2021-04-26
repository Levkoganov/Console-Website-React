const express = require('express');
const router = express.Router();
const playStationController = require('../controller/playstationCon');
const authMW = require('../middleware/authMW');

router.get('/', authMW.authMW, playStationController.playStation);

module.exports = router;
