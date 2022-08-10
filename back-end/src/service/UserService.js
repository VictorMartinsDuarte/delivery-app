const { Users } = require('../database/models');
const md5 = require('md5');
const { generateJWT } = require('../auth/jwt');

const FindUser = async (email) => {
  const foundUser = await Users.findOne({ where: { email } });
  return foundUser;
};

const CreateUser = async (name, email, password, role) => {
  console.log('chegou aqui');
  const newUser = await Users.create({ name, email, password, role });
  console.log(newUser);
  return newUser;
};

const Login = async ({ email, password }) => {
  const pwHash = md5(password);
  const user = await Users.findOne({ where: { email, password: pwHash } });
  const token = generateJWT(user);
  const { name, role } = user;
  return { name, email: user.email, role, token };
};

module.exports = { FindUser, CreateUser, Login };