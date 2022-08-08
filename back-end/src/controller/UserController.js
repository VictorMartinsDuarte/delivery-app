const UserService = require("../service/UserService");

const FindUser = async (req, res, next) => {
  try{
    const { email,password } = req.body;
    const foundUser = await UserService.FindUser(email, password);
    return res.status(200).json(foundUser);
  }catch(error){
    next(error)
  }
}

module.exports = { FindUser };