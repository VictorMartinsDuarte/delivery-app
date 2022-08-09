const express = require('express');

const { CreateUser } = require('../controller/UserController');

const { createValidation } = require('../middwares/validateUser');

const RegisterRouter = express.Router();

RegisterRouter.post('/', createValidation, CreateUser);

module.exports = RegisterRouter;