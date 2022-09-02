const SalesProductsService = require('../service/SalesProducts');

const createSaleProducts = async (req, res, _next) => {
    await SalesProductsService.createSaleProducts(req.body);
    return res.status(201).end();
};

const getSaleProducts = async (req, res, _next) => {
    const { id } = req.params;
    const data = await SalesProductsService.getSalesProducts(id);
    return res.status(200).json(data);
};

module.exports = { createSaleProducts, getSaleProducts };