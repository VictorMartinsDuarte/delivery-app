const Sales = (sequelize, DataTypes) => {
	const Sales = sequelize.define('Sales', {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
		totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pendente",
    }
	}, 
  { timestamps: false,
    underscored: true
  },
    );

    Sales.associate = (models) => {
      Sales.belongsTo(models.Users, { as: 'users', foreignKey: 'userId', foreignKey: 'sellerId' });
	};

	return Sales;
};

module.exports = Sales;