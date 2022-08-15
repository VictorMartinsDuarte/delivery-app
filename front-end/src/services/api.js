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

const apiGetUsers = async () => {
  try {
    const response = await api.get('/login');
    return response.data;
  } catch (err) {
    return false;
  }
};

const apiPostSellers = async () => {
  try {
    const response = await api.post('/customer/checkout');
    console.log(response);
    return response.data;
  } catch (err) {
    return false;
  }
};

export { apiLogin, apiRegister, apiProducts, apiGetUsers, apiPostSellers };
