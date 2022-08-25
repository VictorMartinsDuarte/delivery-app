const md5 = require('md5');
const { Users, Sales } = require('../database/models');
const { generateJWT } = require('../auth/jwt');

const FindUser = async (email) => {
  const foundUser = await Users.findOne({ where: { email } });
  return foundUser;
};

const FindUserByName = async (name) => {
  const foundUser = await Users.findOne({ where: { name } });
  return foundUser;
};

const FindAllUser = async () => {
  const allUser = await Users.findAll();
  return allUser;
};

const CreateUser = async (name, email, password, role) => {
  const newUser = await Users.create({ name, email, password, role });
  return newUser;
};

const Login = async ({ email, password }) => {
  const pwHash = md5(password);
  const user = await Users.findOne({ where: { email, password: pwHash } });
  const token = generateJWT(user);
  const { name, role } = user;
  return { name, email: user.email, role, token };
};

const DeleteUser = async (id) => {
  const foundUser = await Users.findByPk(id);
  if (foundUser.role === 'seller') {
    await Sales.destroy({ where: { sellerId: id } });
    await Users.destroy({ where: { id } });
  }
  if (foundUser.role === 'customer') {
    await Sales.destroy({ where: { userId: id } });
    await Users.destroy({ where: { id } });
  }
  return true;
};

module.exports = { 
  FindUser,
  CreateUser,
  Login,
  FindAllUser,
  FindUserByName,
  DeleteUser };