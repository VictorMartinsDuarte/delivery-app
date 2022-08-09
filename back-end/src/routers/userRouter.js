const express = require('express');

const { FindUser } = require('../controller/UserController');

const { dataValidate } = require('../middwares/validateUser');

const loginRouter = express.Router();

loginRouter.post('/', dataValidate, FindUser);

module.exports = loginRouter;