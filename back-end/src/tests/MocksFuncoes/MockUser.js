const Users = require('../mocks/usersMocks');

  const User = {
    findAll: async () => Users.usersMock,
    findOne: async () => Users.userMock,
    create: async () => Users.NewuserMock,
  };

  const UserSales = {
    findOne: async () => Users.userMock,
  };

  const NewUser = {
    findOne: async () => undefined,
    create: async () => Users.NewuserMock,
  };

  const AdminUser = {
    findByPk: async () => Users.userMockAdmin,
    findOne: async () => undefined,
    create: async () => Users.NewuserMockAdmin,
  };

  const AdminUserDelete = {
    findByPk: async () => Users.userMock,
    destroy: async () => Users.userMock.role,
  };
  
  module.exports = {
    User,
    NewUser,
    AdminUser,
    AdminUserDelete,
    UserSales
  };