const express = require('express');

const { Login, FindAllUser } = require('../controller/UserController');

const { dataValidate } = require('../middwares/validateUser');

const loginRouter = express.Router();

loginRouter.post('/', dataValidate, Login);
loginRouter.get('/', FindAllUser);

module.exports = loginRouter;