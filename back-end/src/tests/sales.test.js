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

describe('Tests on Sales', () => {
  
  before(() => {
    sinon.stub(Users, 'findOne').callsFake(SalesMocks.findOne);
    sinon.stub(Sales, 'findAll').callsFake(SalesMocks.findAll);
  })
  
  after(() => {
    Users.findOne.restore();
    Sales.findAll.restore();
  })
  
  describe('Tests on layer of all products', () => {
    let obj = {
        "email": "zebirita@email.com",
    }
    let response = []
        before(async () => {
          response = await chai.request(server).post('/seller/orders').send(obj)
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

describe('Tests on create sales', () => {
    before(() => {
      sinon.stub(Sales, 'update').callsFake(SalesMocksUpdate.update);
    })
    
    after(() => {
      Sales.update.restore();
    })
    describe('Tests on layer create sales', () => {
      const updateSaleMock = {
        status: 'Concluido',
        };
      let response = []
          before(async () => {
            response = await chai.request(server).put('/seller/orders/1').send(updateSaleMock)
          });
          it('A requisição da chamada customer/checkout retorna um status 201', () => {
            expect(response).to.have.status(204);
        });
    })
  })