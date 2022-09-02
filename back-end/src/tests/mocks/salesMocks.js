const salesMock = [
  {
    id: 1,
    user_id: 3,
    seller_id: 2,
    total_prices: 34.90,
    delivery_address: 'Casa do Zezinho',
    delivery_number: '37',
    sale_date: '17/08/2022',
    status: 'Pendente',
  },
  {
    id: 2,
    user_id: 3,
    seller_id: 2,
    total_prices: 75.40,
    delivery_address: 'Casa do Bruninho',
    delivery_number: '48',
    sale_date: '17/08/2022',
    status: 'Pendente',
  },
];

const salesMockUpdate = {
    id: 1,
    user_id: 3,
    seller_id: 2,
    total_prices: 34.90,
    delivery_address: 'Casa do Zezinho',
    delivery_number: '37',
    sale_date: '17/08/2022',
    status: 'Concluido',
};

module.exports = {
  salesMock,
  salesMockUpdate,
}
