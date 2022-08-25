// const sinon = require('sinon');
// const chai = require('chai');

// const chaiHttp = require('chai-http');

// const { app } = require('../App');
// const customerService = require('../service/CustomerService');
// const { createSaleMock, allProductsMock } = require('./mocks/customerMocks');

// const { expect } = chai;

// describe('Tests on Customer layers', () => {
//   describe('Tests on service layer of customerService', () => {

//     beforeEach(() => {
//       sinon.stub(customerService, 'getAllProducts').resolves(allProductsMock);
//       sinon.stub(customerService, 'createSale').resolves(createSaleMock.id);
//     })

//     afterEach(() => {
//       customerService.getAllProducts.restore();
//       customerService.createSale.restore();
//     })

//     it ("If getAllProducts returns all products", async () => {
//       const allProducts = await customerService.getAllProducts();
//       expect(allProducts).to.be.equal(allProductsMock);
//     })
//     it ("If createSale returns new sale id", async () => {
//       const newSaleId = await customerService.createSale(createSaleMock);
//       expect(newSaleId).to.be.equal(createSaleMock.id);
//     })
//   })
// })