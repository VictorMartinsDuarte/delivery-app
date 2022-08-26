const Product = require('../mocks/customerMocks');

  const ProductsMocks = {
    findAll: async () => Product.allProductsMock,
    create: async () => Product.createSaleMock,
  };

  module.exports = {
    ProductsMocks,
  };