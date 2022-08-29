const SaleProductsMock = require('../mocks/salesProductsMocks');

  const SalesProductsMocks = {
    findAll: async () => SaleProductsMock.salesProductsMock,
    create: async () => SaleProductsMock.CreateProductSalesMock,
  };

  module.exports = {
    SalesProductsMocks,
  };