const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Users } = require('../database/models');
const { User: UserMock }  = require('../tests/MocksFuncoes/MockUser')
const { NewUser: NewUser }  = require('../tests/MocksFuncoes/MockUser')
const { AdminUser: AdminUser }  = require('../tests/MocksFuncoes/MockUser')
const { AdminUserDelete: AdminUserDelete }  = require('../tests/MocksFuncoes/MockUser')
const server = require('../api/app');
const { expect } = chai;
chai.use(chaiHttp);

describe('Tests on User layers', () => {
  
  before(() => {
    sinon.stub(Users, 'findAll').callsFake(UserMock.findAll);
    sinon.stub(Users, 'findOne').callsFake(UserMock.findOne);
    sinon.stub(Users, 'create').callsFake(UserMock.create);
  })
  
  after(() => {
    Users.findAll.restore();
    Users.findOne.restore();
    Users.create.restore();
  })
  
  describe('Tests on layer of users', () => {
    let response = []
        before(async () => {
          response = await chai.request(server).get('/login')
        });
        it('A requisição da chamada Login retorna um status 200', () => {
          expect(response).to.have.status(200);
      });
      it('A requisição da chamada login é um array', () => {
        expect(response.body).to.be.a('array');
    });
      it('A requisição da chamada login retorn um array com 2 objetos', () => {
        expect(response.body).to.have.length(2);
    });
  })
  describe('Tests on layer of user', () => {
    let user = {
      "email": 'zebirita@email.com',
      "password": '$#zebirita#$',
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).post('/login').send(user)
        });
        it('A requisição da chamada Login retorna um status 200', () => {
          expect(response).to.have.status(200);
      });
      it('A requisição da chamada Login retorna um user', () => {
        expect(response.body).to.be.a('object');
    });
  })
  describe('Tests on layer of user incorrect', () => {
    let user = {
      "email": 'zebirita@email.com',
      "password": '$#zebirit',
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).post('/login').send(user)
        });
        it('A requisição incorreta na chamada Login retorna um status 404', () => {
          expect(response).to.have.status(404);
      });
  })
  describe('Tests on layer of user create incorret', () => {
    let user = {
      "email": 'zebirita@email.com',
      "password": '$#zebirit',
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).post('/register').send(user)
        });
        it('A requisição incorreta na chamada Login retorna um status 409', () => {
          expect(response).to.have.status(409);
      });
  })
})

describe('Tests on create User layers', () => {
  
  before(() => {
    sinon.stub(Users, 'findOne').callsFake(AdminUser.findOne);
    sinon.stub(Users, 'findByPk').callsFake(AdminUser.findByPk);
    sinon.stub(Users, 'create').callsFake(AdminUser.create);
  })
  
  after(() => {
    Users.findOne.restore();
    Users.create.restore();
    Users.findByPk.restore();
  })

  describe('Tests on layer create of user Admin', () => {
    let user2 = {
      "name": 'airam lobato',
      "email": "airamlobato@gmail.com",
      "password": 'airam123',
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).post('/admin').set({
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicGFzc3dvcmQiOiJhNGM4NmVkZWNjNWFlZTA2ZWZmOGZkZWRhNjllMGQwNCIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY2MTQ2MjA3OSwiZXhwIjoxNjYxNDgzNjc5fQ.OKZkYzOPUQ1IMDaOsYHSTaNt7ncFIj5Q1vulo7Yqst0"
          }).send(user2)
        });
        it('A requisição create retorna o status correto', () => {
          expect(response).to.have.status(201);
      });
  })
})

describe('Tests on no admin', () => {
  
  before(() => {
    sinon.stub(Users, 'findOne').callsFake(AdminUser.findOne);
    sinon.stub(Users, 'findByPk').callsFake(AdminUser.findByPk);
    sinon.stub(Users, 'create').callsFake(AdminUser.create);
  })
  
  after(() => {
    Users.findOne.restore();
    Users.create.restore();
    Users.findByPk.restore();
  })

  describe('Tests on layer create of user no Admin', () => {
    let user2 = {
      "name": 'airam lobato',
      "email": "airamlobato@gmail.com",
      "password": 'airam123',
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).post('/admin').send(user2)
        });
        it('A requisição admin create retorna o status correto', () => {
          expect(response).to.have.status(401);
      });
  })
})

describe('Tests on Admin User layers', () => {
  
  before(() => {
    sinon.stub(Users, 'findOne').callsFake(NewUser.findOne);
    sinon.stub(Users, 'create').callsFake(NewUser.create);
  })
  
  after(() => {
    Users.findOne.restore();
    Users.create.restore();
  })

  describe('Tests on layer create of user', () => {
    let user2 = {
      "name": 'airam lobato',
      "email": "airamlobato@gmail.com",
      "password": 'airam123',
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).post('/register').send(user2)
        });
        it('A requisição create retorna o status correto', () => {
          expect(response).to.have.status(201);
      });
  })
})

describe('Tests on delete User layers', () => {
  
  before(() => {
    sinon.stub(Users, 'findByPk').callsFake(AdminUserDelete.findByPk);
    sinon.stub(Users, 'destroy').callsFake(AdminUserDelete.destroy);
  })
  
  after(() => {
    Users.destroy.restore();
    Users.findByPk.restore();
  })

  describe('Tests on layer delete of user Admin', () => {
    let user2 = {
      "id": 3,
    }
    let response = {}
        before(async () => {
          response = await chai.request(server).delete('/admin').set({
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicGFzc3dvcmQiOiJhNGM4NmVkZWNjNWFlZTA2ZWZmOGZkZWRhNjllMGQwNCIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY2MTQ2MjA3OSwiZXhwIjoxNjYxNDgzNjc5fQ.OKZkYzOPUQ1IMDaOsYHSTaNt7ncFIj5Q1vulo7Yqst0"
          }).send(user2)
        });
        it('A requisição delete retorna o status correto', () => {
          expect(response).to.have.status(200);
      });
  })
})

