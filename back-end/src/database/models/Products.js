const Products = (sequelize, DataTypes) => {
	const Products = sequelize.define('products', {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
	  urlImage: DataTypes.STRING,
	}, 
    { timestamps: false},
    );

    Products.associate = (models) => {
        Products.belongsTo(models.SalesProducts, { as: 'salesProducts', foreignKey: 'productId' });
	};

	return Products;
};

module.exports = Products;