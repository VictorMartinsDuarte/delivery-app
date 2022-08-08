const port = process.env.PORT || 3001;
const app = require('./app');

const Login = require('../routers/LoginRouter');

app.listen(port);
app.use('/login', Login);
console.log(`Api rodando na porta ${port}`);
