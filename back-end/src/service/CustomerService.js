const { Products, Sales } = require('../database/models');

const getAllProducts = async () => {
  const foundProducts = await Products.findAll();
    return foundProducts;
};

const createSale = async ({ userId, sellerId,
  totalPrice, deliveryAddress, deliveryNumber, saleDate, status }) => {
  const createNewSale = await Sales.create({
    userId, 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  });
    return createNewSale.id;
};

module.exports = { getAllProducts, createSale };