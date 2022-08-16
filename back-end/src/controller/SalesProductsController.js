const SalesProductsService = require('../service/SalesProducts');

const createSaleProducts = async (req, res, _next) => {
    await SalesProductsService.createSaleProducts(req.body);
    return res.status(201).end();
};

module.exports = { createSaleProducts };