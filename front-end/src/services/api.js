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

export default apiLogin;
