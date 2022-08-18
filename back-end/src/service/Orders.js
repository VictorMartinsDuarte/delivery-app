const { Sales } = require('../database/models');

const getAllSales = async (userId) => {
  const foundSales = await Sales.findAll({ where: { userId } });
    return foundSales;
};
module.exports = { getAllSales };