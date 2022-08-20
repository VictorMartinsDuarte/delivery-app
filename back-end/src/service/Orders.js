const { Sales } = require('../database/models');

const getAllSales = async (userId) => {
  const foundSales = await Sales.findAll({ where: { userId } });
    return foundSales;
};

const getAllSalesSeller = async (sellerId) => {
  const foundSales = await Sales.findAll({ where: { sellerId } });
    return foundSales;
};
module.exports = { getAllSales, getAllSalesSeller };