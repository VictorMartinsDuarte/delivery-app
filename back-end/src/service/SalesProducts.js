const { salesProducts, Sales, Products } = require('../database/models');

const createSaleProducts = async ({ saleId, productId,
    quantity }) => {
  const createNewSaleProducts = await salesProducts.create({
    saleId, 
    productId,
    quantity,
  });
    return createNewSaleProducts;
};

const getSalesProducts = async (id) => {
  const findSeller = await Sales.findOne(
      {
         where: { id },
include: [
{
model: Products,
as: 'products',
through: { attributes: ['quantity'] },
}],
      },
  );
  return findSeller;
};

module.exports = { createSaleProducts, getSalesProducts };