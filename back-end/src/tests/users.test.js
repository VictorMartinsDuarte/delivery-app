const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

const { app } = require('../api/app');
// const Users = require('../database/models/Users');
const userService = require('../service/UserService');
const { usersMock, usersEmails } = require('./mocks/usersMocks');

const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);

describe('Tests on User layers', () => {
  describe('Tests on service layer of users', () => {

    beforeEach(() => {
      // sinon.stub(Users, 'findOne').resolves(usersMock[0]);
      sinon.stub(userService, 'FindUser').resolves(usersMock[0]);
      // sinon.stub(userService, 'FindUserByName').resolves(usersMock[0]);
      sinon.stub(userService, 'FindAllUser').resolves();
      sinon.stub(userService, 'CreateUser').resolves();
      sinon.stub(userService, 'Login').resolves();
    })

    afterEach(() => {
      // Users.findOne.restore();
      userService.FindUser.restore();
      // userService.FindUserByName.restore();
      userService.FindAllUser.restore();
      userService.CreateUser.restore();
      userService.Login.restore();
    })

    it ("If FindUser returns the user found by it's email", async () => {
      const user = await userService.FindUser(usersEmails[0]);
      expect(user).to.be.equal(usersMock[0]);
    })
    it ('If endpoint GET returns all users', (done) => {
      chai.request(app).get('/login')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
        });
      done();
    })
  })
})