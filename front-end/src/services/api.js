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

const apiPostSellers = async (objBody, token, arrayProducts) => {
  const response = await api.post(
    '/customer/checkout',
    {
      userId: objBody.userId,
      sellerId: objBody.sellerId,
      totalPrice: objBody.totalPrice,
      deliveryAddress: objBody.deliveryAddress,
      deliveryNumber: objBody.deliveryNumber,
    },
    {
      headers: {
        Authorization: `${token}`,
      } },
  );
  arrayProducts.forEach(async (element) => {
    await api.post('/salesproducts', {
      saleId: response.data,
      productId: element.id,
      quantity: element.quantity,
    });
  });
  return response.data;
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

const apiDeleteAdmin = async (idUser, token) => {
  try {
    const response = await api.delete(
      '/admin',
      { data: { id: idUser },
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.status;
  } catch (err) {
    return false;
  }
};

const apiGetOrders = async (idUser) => {
  const response = await api.get(`/orders/${idUser}`);
  return response.data;
};
const apiGetOrdersSeller = async (idUser) => {
  const response = await api.get(`/orders/seller/${idUser}`);
  return response.data;
};

const apiGetSellers = async (idSeller) => {
  const response = await api.get(`/salesproducts/${idSeller}`);
  return response.data;
};

const apiupdateSeler = async (idSeller, statusSeller) => {
  const response = await api.put(`/seller/orders/${idSeller}`, { status: statusSeller });
  return response.data;
};

export { apiLogin,
  apiRegister,
  apiProducts,
  apiGetUsers,
  apiPostSellers,
  findGetusersCostumer,
  findGetusersSeller,
  apiRegisterAdmin,
  apiGetOrders,
  apiGetSellers,
  apiupdateSeler,
  apiGetOrdersSeller,
  apiDeleteAdmin };
