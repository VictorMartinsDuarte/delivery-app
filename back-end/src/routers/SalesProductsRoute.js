const express = require('express');

const { createSaleProducts, getSaleProducts } = require('../controller/SalesProductsController');

const SalesProductsRouter = express.Router();

SalesProductsRouter.post('/', createSaleProducts);
SalesProductsRouter.get('/:id', getSaleProducts);

module.exports = SalesProductsRouter;
