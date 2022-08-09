const md5 = require('md5');
const UserService = require('../service/UserService');

const dataValidate = async (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = await UserService.FindUser(email);
  const comp = md5(password);
    if (!foundUser || comp !== foundUser.password) {
      return res.status(404).json('Not found');
    }
    next();
  };

  const createValidation = async (req, res, next) => {
    const { email } = req.body;
    const foundUser = await UserService.FindUser(email);
    if (foundUser) res.status(409).end();
    next();
  };

module.exports = { dataValidate, createValidation };
