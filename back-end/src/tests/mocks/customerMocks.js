const createSaleMock = {
  id: 7,
  userId: 3,
  sellerId: 2,
  totalPrice: 42.50,
  deliveryAddress: 'Casa do Zezinho',
  deliveryNumber: '37',
  saleDate: '17/08/2022',
};

const allProductsMock = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
]

module.exports = {
  createSaleMock,
  allProductsMock,
}
