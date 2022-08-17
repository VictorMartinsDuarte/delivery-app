const { Products, Sales } = require('../database/models');

const getAllProducts = async () => {
  const foundProducts = await Products.findAll();
    return foundProducts;
};

const createSale = async ({ userId, sellerId,
  totalPrice, deliveryAddress, deliveryNumber }) => {
    // const user = await FindUser(userId);
  const createNewSale = await Sales.create({
    userId, 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
  });
    return createNewSale.id;
};

module.exports = { getAllProducts, createSale };