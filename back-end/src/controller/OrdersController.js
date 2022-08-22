const Orders = require('../service/Orders');

const getSalesId = async (req, res, _next) => {
    const { id } = req.params;
    const found = await Orders.getAllSales(id);
    return res.status(200).json(found);
};

const getSalesIdSeller = async (req, res, _next) => {
    const { id } = req.params;
    const found = await Orders.getAllSalesSeller(id);
    return res.status(200).json(found);
};

module.exports = { getSalesId, getSalesIdSeller };