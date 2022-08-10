const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const { Users } = require('../database/models')

const SECRET_KEY = readFileSync('jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '6h',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, SECRET_KEY, jwtConfig)
  return token;
};

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token não encontrado.'});

  try {
    const { data: { id } } = jwt.verify(token, SECRET_KEY);
    const user = await Users.findByPk(id);
    if (!user) return res.status(401).json({ message: 'Erro ao validar token.'})
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { generateJWT, validateJWT };
