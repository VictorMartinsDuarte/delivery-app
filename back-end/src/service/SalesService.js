const { Sales, Users } = require('../database/models');

const getAllSales = async (email) => {
  const { dataValues } = await Users.findOne({ where: { email } });
  const foundSales = await Sales.findAll({ where: dataValues.id });
    return foundSales;
};

const updateSales = async (id, status) => {
  const finbyidSale = await Sales.findOne({ where: { id } });
  finbyidSale.status = status;
        await finbyidSale.save();
    return true;
};

module.exports = { getAllSales, updateSales };