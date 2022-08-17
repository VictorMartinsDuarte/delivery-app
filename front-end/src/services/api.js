import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const apiLogin = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (err) {
    return false;
  }
};
const apiRegister = async (name, email, password) => {
  try {
    const response = await api.post('/register', { name, email, password });
    return response.status;
  } catch (err) {
    return false;
  }
};

const apiProducts = async () => {
  try {
    const response = await api.get('/customer/products');
    return response.data;
  } catch (err) {
    return false;
  }
};

const apiRegisterAdmin = async (object, token) => {
  try {
    const response = await api.post('/admin', {
      name: object.name,
      email: object.email,
      password: object.password,
      role: object.role }, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.status;
  } catch (err) {
    return false;
  }
};

export { apiLogin, apiRegister, apiProducts, apiRegisterAdmin };
