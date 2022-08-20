const express = require('express');

const { getAllSales, updateSales } = require('../controller/SalesController');

const salesRouter = express.Router();

salesRouter.post('/orders', getAllSales);
salesRouter.put('/orders/:id', updateSales);

module.exports = salesRouter;
