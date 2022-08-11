const { Products } = require('../database/models');

const getAllProducts = async () => {
  const foundProducts = await Products.findAll();
    return foundProducts;
};

module.exports = { getAllProducts };