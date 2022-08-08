const express = require('express');

const { FindUser } = require('../controller/UserController');

const loginRouter = express.Router();

loginRouter.post('/', FindUser);

module.exports = loginRouter;