const { Sales, Users } = require('../database/models');

const getAllSales = async (email) => {
  const { dataValues } = await Users.findOne({ where: { email } });
  const foundSales = await Sales.findAll({ where: dataValues.id });
    return foundSales;
};

module.exports = { getAllSales };