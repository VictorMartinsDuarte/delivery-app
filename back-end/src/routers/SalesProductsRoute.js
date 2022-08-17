const express = require('express');

const { createSaleProducts } = require('../controller/SalesProductsController');

const SalesProductsRouter = express.Router();

SalesProductsRouter.post('/', createSaleProducts);

module.exports = SalesProductsRouter;
