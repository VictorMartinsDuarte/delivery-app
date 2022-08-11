const ProductsService = require('../service/CustomerService');

const getAllProducts = async (_req, res, _next) => {
    const foundProducts = await ProductsService.getAllProducts();
    return res.status(200).json(foundProducts);
};

module.exports = { getAllProducts };