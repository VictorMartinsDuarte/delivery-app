const express = require('express');

const { getAllProducts } = require('../controller/CustomerController');

const productsRouter = express.Router();

productsRouter.get('/products', getAllProducts);

module.exports = productsRouter;
