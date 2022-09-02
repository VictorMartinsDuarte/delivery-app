const express = require('express');

const app = express();
const Login = require('../routers/userRouter');
const Register = require('../routers/RegisterRouter');
const Sales = require('../routers/SalesRouter');
const Products = require('../routers/CustomerRouter');
const salesProducts = require('../routers/SalesProductsRoute');
const Admin = require('../routers/adminRouter');
const Orders = require('../routers/OrdersRouter');

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.json());
app.use(accessControl);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.static('src'));

app.use('/login', Login);
app.use('/register', Register);
app.use('/seller', Sales);
app.use('/customer', Products);
app.use('/salesproducts', salesProducts);
app.use('/admin', Admin);
app.use('/orders', Orders);

module.exports = app;
