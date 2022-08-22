const SalesService = require('../service/SalesService');

const getAllSales = async (req, res, _next) => {
    const { email } = req.body;
    const foundSales = await SalesService.getAllSales(email);
    return res.status(200).json(foundSales);
};

const updateSales = async (req, res, _next) => {
    const { id } = req.params;
    const { status } = req.body;
    await SalesService.updateSales(id, status);
    return res.status(204).end();
};

module.exports = { getAllSales, updateSales };