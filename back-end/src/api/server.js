require('dotenv');

const port = process.env.PORT || 3001;
const app = require('./app');
const Login = require('../routers/userRouter');
const Register = require('../routers/RegisterRouter');
const Sales = require('../routers/SalesRouter');
const Products = require('../routers/CustomerRouter');
const salesProducts = require('../routers/SalesProductsRoute');
const Admin = require('../routers/adminRouter');
const Orders = require('../routers/OrdersRouter');

app.listen(port);
app.use('/login', Login);
app.use('/register', Register);
app.use('/seller', Sales);
app.use('/customer', Products);
app.use('/salesproducts', salesProducts);
app.use('/admin', Admin);
app.use('/orders', Orders);
console.log(`Api rodando na porta ${port}`);
