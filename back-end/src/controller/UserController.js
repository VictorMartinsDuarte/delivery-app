const md5 = require('md5');
const UserService = require('../service/UserService');

const FindAllUser = async (_req, res, _next) => {
    const allUsers = await UserService.FindAllUser();
    return res.status(200).json(allUsers);
};

const CreateUser = async (req, res, _next) => {
    const { name, email, password } = req.body;
    const pwHash = md5(password);
    await UserService.CreateUser(name, email, pwHash);
    return res.status(201).end();
};

const Login = async (req, res, _next) => {
    const { email, password } = req.body;
    const user = await UserService.Login({ email, password });
    return res.status(200).json(user);
};

const CreateByAdmin = async (req, res, _next) => {
    const { name, email, password, role } = req.body;
    const { role: adminRole } = req.user;
    const pwHash = md5(password);
    if (adminRole !== 'administrator') return res.status(403).json({ message: 'Não autorizado.' });
    const user = await UserService.CreateUser(name, email, pwHash, role);
    return res.status(201).json(user);
};

const deleteUser = async (req, res, _next) => {
    const { id } = req.body;
    await UserService.DeleteUser(id);
    return res.status(200).end();
};

module.exports = { FindAllUser, CreateUser, Login, CreateByAdmin, deleteUser };
