const { Users } = require('../database/models');

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

module.exports = { FindUser, CreateUser };