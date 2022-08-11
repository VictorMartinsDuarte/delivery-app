const SalesService = require('../service/SalesService');

const getAllSales = async (req, res, _next) => {
    const { email } = req.body;
    const foundSales = await SalesService.getAllSales(email);
    return res.status(200).json(foundSales);
};

module.exports = { getAllSales };