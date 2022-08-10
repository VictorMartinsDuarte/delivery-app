const saveStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
};

const clearStorage = () => {
  localStorage.removeItem('user');
};

const getStorage = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
};

module.exports = { saveStorage, clearStorage, getStorage };
