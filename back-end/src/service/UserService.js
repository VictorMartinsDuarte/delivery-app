const { Users } = require('../database/models');

const FindUser = async (email, _senha) => {
  console.log(Users);
  console.log(email);
  const foundUser = await Users.find()
  console.log(foundUser);
  return foundUser;
}

module.exports = { FindUser };