const express = require('express');

const { getAllProducts, createSale } = require('../controller/CustomerController');
const { validateJWT } = require('../auth/jwt');

const costumerRouter = express.Router();

costumerRouter.get('/products', getAllProducts);
costumerRouter.post('/checkout', validateJWT, createSale);

module.exports = costumerRouter;
