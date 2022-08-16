const { salesProducts } = require('../database/models');

const createSaleProducts = async ({ saleId, productId,
    quantity }) => {
  const createNewSaleProducts = await salesProducts.create({
    saleId, 
    productId,
    quantity,
  });
    return createNewSaleProducts;
};

module.exports = { createSaleProducts };