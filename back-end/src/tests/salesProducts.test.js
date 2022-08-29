const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { salesProducts, Sales } = require('../database/models');
const { SalesProductsMocks: SalesProductsMocks }  = require('../tests/MocksFuncoes/MockSalesProducts')
const server = require('../api/app');
const { expect } = chai;
chai.use(chaiHttp);

describe('Tests on SalesProducts', () => {
  
  before(() => {
    sinon.stub(salesProducts, 'create').callsFake(SalesProductsMocks.create);
    sinon.stub(Sales, 'findAll').callsFake(SalesProductsMocks.findAll);
  })
  
  after(() => {
    salesProducts.create.restore();
    Sales.findAll.restore();
  })
  
  describe('Tests on layer of create salesProducts', () => {
    const CreateProductSalesMock = {
        sale_id: 1,
        product_id: 5,
        quantity: 4,
    }
    let response = []
        before(async () => {
          response = await chai.request(server).post('/salesproducts').send(CreateProductSalesMock)
        });
        it('A requisição da chamada customer/products retorna um status 200', () => {
            expect(response).to.have.status(201);
      });
  })
  describe('Tests on layer of get all salesProducts', () => {
    let response = []
        before(async () => {
          response = await chai.request(server).get('/salesproducts/1')
        });
        it('A requisição da chamada customer/products retorna um status 200', () => {
            expect(response).to.have.status(200);
      });
  })
});
