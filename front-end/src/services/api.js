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

const findGetusersCostumer = async (Email) => {
  const users = await apiGetUsers();
  const sellers = users.filter(({ email }) => email === Email);
  return sellers;
};

const findGetusersSeller = async (Nome) => {
  const users = await apiGetUsers();
  const sellers = users.filter(({ name }) => name === Nome);
  return sellers;
};

const apiPostSellers = async (objBody, token) => {
  const response = await api.post(
    '/customer/checkout',
    {
      userId: objBody.userId,
      sellerId: objBody.sellerId,
      totalPrice: objBody.priceTotal,
      deliveryAddress: objBody.adresss,
      deliveryNumber: objBody.deliveryNum,
    },
    {
      headers: {
        Authorization: `${token}`,
      } },
  );
  return response.data;
};

const apiPostSalesProducts = async (idseller, arrayProducts) => {
  arrayProducts.forEach(async (element) => {
    await api.post('/salesproducts', {
      saleId: idseller,
      productId: element.id,
      quantity: element.quantity,
    });
  });
};

export { apiLogin,
  apiRegister,
  apiProducts,
  apiGetUsers,
  apiPostSellers,
  apiPostSalesProducts,
  findGetusersCostumer,
  findGetusersSeller };
