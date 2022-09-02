const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Products, Sales, Users } = require('../database/models');
const { ProductsMocks: ProductsMocks }  = require('../tests/MocksFuncoes/MockProducts')
const { AdminUser: AdminUser }  = require('../tests/MocksFuncoes/MockUser')
const server = require('../api/app');
const { expect } = chai;
chai.use(chaiHttp);

describe('Tests on User layers', () => {
  
  before(() => {
    sinon.stub(Products, 'findAll').callsFake(ProductsMocks.findAll);
  })
  
  after(() => {
    Products.findAll.restore();
  })
  
  describe('Tests on layer of all products', () => {
    let response = []
        before(async () => {
          response = await chai.request(server).get('/customer/products')
        });
        it('A requisição da chamada customer/products retorna um status 200', () => {
          expect(response).to.have.status(200);
      });
      it('A requisição da chamada customer/products é um array', () => {
        expect(response.body).to.be.a('array');
    });
      it('A requisição da chamada customer/products retorn um array com 2 objetos', () => {
        expect(response.body).to.have.length(2);
    });
  })
})

describe('Tests on create sales', () => {
    before(() => {
      sinon.stub(Sales, 'create').callsFake(ProductsMocks.create);
      sinon.stub(Users, 'findByPk').callsFake(AdminUser.findByPk);
    })
    
    after(() => {
      Sales.create.restore();
      Users.findByPk.restore();
    })
    describe('Tests on layer create sales', () => {
      const createSaleMock = {
          id: 7,
          userId: 3,
          sellerId: 2,
          totalPrice: 42.50,
          deliveryAddress: 'Casa do Zezinho',
          deliveryNumber: '37',
        };
      let response = []
          before(async () => {
            response = await chai.request(server).post('/customer/checkout').set({
              Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicGFzc3dvcmQiOiJhNGM4NmVkZWNjNWFlZTA2ZWZmOGZkZWRhNjllMGQwNCIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY2MTk3NzU2MSwiZXhwIjoxNjYxOTk5MTYxfQ.VhXxaF2c6d5JX1SP9_H8anSVyskygZVXCju2omnUZtw"
            }).send(createSaleMock)
          });
          it('A requisição da chamada customer/checkout retorna um status 201', () => {
            expect(response).to.have.status(201);
        });
    })
  })