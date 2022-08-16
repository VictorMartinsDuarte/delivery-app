const ProductsService = require('../service/CustomerService');

const getAllProducts = async (_req, res, _next) => {
    const foundProducts = await ProductsService.getAllProducts();
    return res.status(200).json(foundProducts);
};

const createSale = async (req, res, _next) => {
    const newSale = await ProductsService.createSale(req.body);
    return res.status(201).json(newSale);
};

module.exports = { getAllProducts, createSale };