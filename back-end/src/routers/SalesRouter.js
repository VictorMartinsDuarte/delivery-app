const express = require('express');

const { getAllSales } = require('../controller/SalesController');

const salesRouter = express.Router();

salesRouter.post('/orders', getAllSales);

module.exports = salesRouter;
