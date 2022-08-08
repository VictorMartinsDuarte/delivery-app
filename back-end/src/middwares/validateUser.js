const md5 = require('md5');
const UserService = require('../service/UserService');

const dataValidate = async (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = await UserService.FindUser(email, password);
  const comp = md5(password);
    if (!foundUser || comp !== foundUser.password) {
      return res.status(404).json('Not found');
    }
    console.log(comp);
    next();
  };

module.exports = { dataValidate };
