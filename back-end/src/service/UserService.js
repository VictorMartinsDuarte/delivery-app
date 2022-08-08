const { Users } = require('../database/models');

const FindUser = async (email, _senha) => {
  const foundUser = await Users.findOne({ where: { email } });
  return foundUser;
};

module.exports = { FindUser };