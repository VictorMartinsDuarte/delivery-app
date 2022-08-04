const Sales = (sequelize, DataTypes) => {
	const Sales = sequelize.define('sales', {
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
    saleDate: DataTypes.DATETIME,
    status: DataTypes.STRING,
	}, 
    { timestamps: false},
    );

    Sales.associate = (models) => {
      Sales.belongsTo(models.Users, { as: 'users', foreignKey: 'userId' });
      Sales.belongsTo(models.Users, { as: 'users', foreignKey: 'sellerId' });
	};

	return Sales;
};

module.exports = Sales;