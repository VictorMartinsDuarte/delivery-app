const SaleMock = require('../mocks/salesMocks');
const Users = require('../mocks/usersMocks');

  const SalesMocks = {
    findOne: async () => Users.userMock,
    findAll: async () => SaleMock.salesMock,
  };

  const SalesMocksUpdate = {
    update: async () => SaleMock.salesMockUpdate,
  };

  module.exports = {
    SalesMocks,
    SalesMocksUpdate
  };