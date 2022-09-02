const usersMock = [
  {
    id: 3,
    name: 'Birita',
    email: 'birita@gmail.com',
    password: 'zezinho123',
    role: 'Customer',
  },
  {
    id: 4,
    name: 'Futuro',
    email: 'futuro@gmail.com',
    password: 'àfrente123',
    role: 'Customer',
  },
];

const userMock = {
  id: 3,
    name: 'Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'Customer',
}

const NewuserMock = {
  id: 4,
    name: 'airam lobato',
    email: 'airamlobato@email.com',
    password: 'c7f9750f3086ee495aa25e51dad3f338',
    role: 'Customer',
}

const NewuserMockAdmin = {
  id: 4,
    name: 'airam lobato',
    email: 'airamlobato@email.com',
    password: 'c7f9750f3086ee495aa25e51dad3f338',
    role: 'administrator',
}

const userMockAdmin = {
    "id": 1,
    "name": 'Delivery App Admin',
    "email": 'adm@deliveryapp.com"',
    "password": 'a4c86edecc5aee06eff8fdeda69e0d04',
    "role": 'administrator',
}

const usersEmails = ['birita@gmail.com', 'futuro@gmail.com'];

module.exports = {
  usersMock,
  usersEmails,
  userMock,
  NewuserMock,
  NewuserMockAdmin,
  userMockAdmin,
}
