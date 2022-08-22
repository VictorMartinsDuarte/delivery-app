const express = require('express');

const { getSalesId, getSalesIdSeller } = require('../controller/OrdersController');

const orderRouter = express.Router();

orderRouter.get('/:id', getSalesId);
orderRouter.get('/seller/:id', getSalesIdSeller);

module.exports = orderRouter;
