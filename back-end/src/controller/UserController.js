const md5 = require('md5');
const { generateJWT } = require('../auth/jwt');
const UserService = require('../service/UserService');

const FindUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const foundUser = await UserService.FindUser(email);
    return res.status(200).json(foundUser);
  } catch (error) {
    next(error);
  }
};

const CreateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const pwHash = md5(password);
    await UserService.CreateUser(name, email, pwHash);
    return res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.Login({ email, password });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { FindUser, CreateUser, Login };