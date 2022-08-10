const express = require('express');

const { Login } = require('../controller/UserController');

const { dataValidate } = require('../middwares/validateUser');

const loginRouter = express.Router();

loginRouter.post('/', dataValidate, Login);

module.exports = loginRouter;