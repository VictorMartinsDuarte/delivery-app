const express = require('express');

const { getSalesId } = require('../controller/OrdersController');

const orderRouter = express.Router();

orderRouter.get('/:id', getSalesId);

module.exports = orderRouter;
