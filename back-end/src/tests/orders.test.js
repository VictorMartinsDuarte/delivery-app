const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Products, Sales, Users } = require('../database/models');
const { SalesMocks: SalesMocks }  = require('../tests/MocksFuncoes/MockSales')
const { SalesMocksUpdate: SalesMocksUpdate }  = require('../tests/MocksFuncoes/MockSales')
const { UserSales: UserSales }  = require('../tests/MocksFuncoes/MockUser')
// const { AdminUser: AdminUser }  = require('../tests/MocksFuncoes/MockUser')
const server = require('../api/app');
const { expect } = chai;
chai.use(chaiHttp);

describe('Tests on Sales with Ids', () => {
  
  before(() => {
    sinon.stub(Sales, 'findAll').callsFake(SalesMocks.findAll);
  })
  
  after(() => {
    Sales.findAll.restore();
  })
  
  describe('Tests on layer of all sales with UserId', () => {
    let response = []
        before(async () => {
          response = await chai.request(server).get('/orders/3')
        });
        it('A requisição da chamada customer/products retorna um status 200', () => {
            expect(response).to.have.status(200);
      });
      it('A requisição da chamada customer/products é um array', () => {
        expect(response.body).to.be.a('array');
    });
    //   it('A requisição da chamada customer/products retorn um array com 2 objetos', () => {
    //     expect(response.body).to.have.length(1);
    // });
  })

  describe('Tests on layer of all sales with SellerId', () => {
    let response = []
        before(async () => {
          response = await chai.request(server).get('/orders/seller/2')
        });
        it('A requisição da chamada customer/products retorna um status 200', () => {
            expect(response).to.have.status(200);
      });
      it('A requisição da chamada customer/products é um array', () => {
        expect(response.body).to.be.a('array');
    });
    //   it('A requisição da chamada customer/products retorn um array com 2 objetos', () => {
    //     expect(response.body).to.have.length(1);
    // });
  })
})
