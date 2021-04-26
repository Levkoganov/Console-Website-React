// DEPENDENCIES
const express = require('express');
const session = require('express-session');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/mongoose');

// ROUTERS
const authRouter = require('./routes/auth');
const settingRouter = require('./routes/setting');
const playStationRouter = require('./routes/playStation');
const xbox = require('./routes/xbox');

// EXPRESS
const app = express();

// SET AND USE DEPENDENCIES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.ACCESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
// app.use(cookieParser());
app.use(cors());
//NEW
// app.use(express.static('public'));

// ROUTER PATH
app.use('/auth', authRouter);
app.use('/setting', settingRouter);
app.use('/playStation', playStationRouter);
app.use('/xbox', xbox);

app.get('/', (req, res) => {
  res.json({ msg: 'hi' });
});

module.exports = app;
