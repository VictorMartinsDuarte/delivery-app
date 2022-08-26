const { Sales, Users } = require('../database/models');

const getAllSales = async (email) => {
  const User = await Users.findOne({ where: { email } });
  const foundSales = await Sales.findAll({ where: User.id });
    return foundSales;
};

const updateSales = async (id, statusUpdate) => {
await Sales.update(
  { status: statusUpdate },
  { where: { id } },
  );
    return true;
};

module.exports = { getAllSales, updateSales };