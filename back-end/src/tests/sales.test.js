const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

const { app } = require('../App');
const Sales = require('../database/models/Sales');
const salesService = require('../service/SalesService');
const { salesMock } = require('./mocks/salesMocks');

const { expect } = chai;

describe('Tests on Sales layers', () => {
  describe('Tests on service layer of sales', () => {

    beforeEach(() => {
      // sinon.stub(Sales, 'findAll').resolves(salesMock);
      sinon.stub(salesService, 'getAllSales').resolves(salesMock);
    })

    afterEach(() => {
      salesService.getAllSales.restore();
    })

    it ("If getAllSales returns all sales", async () => {
      const allSales = await salesService.getAllSales();
      expect(allSales).to.be.equal(salesMock);
    })
  })
})