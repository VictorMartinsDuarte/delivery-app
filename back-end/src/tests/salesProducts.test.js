const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

const { app } = require('../App');
const salesProducts = require('../service/SalesProducts');
const { salesProductsMock } = require('./mocks/salesProductsMocks');

const { expect } = chai;

describe('Tests on SalesProducts layers', () => {
  describe('Tests on service layer of salesProducts', () => {

    beforeEach(() => {
      sinon.stub(salesProducts, 'createSaleProducts').resolves(salesProductsMock[0]);
    })

    afterEach(() => {
      salesProducts.createSaleProducts.restore();
    })

    it ("If createSaleProducts returns new salesProducts", async () => {
      const newSalesProduct = await salesProducts.createSaleProducts(salesProductsMock[0]);
      expect(newSalesProduct).to.be.equal(salesProductsMock[0]);
    })
  })
})