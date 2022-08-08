const Users = (sequelize, DataTypes) => {
	const Users = sequelize.define('users', {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
		password: DataTypes.STRING,
    role: DataTypes.STRING,
	}, 
    { timestamps: false },
    );

    Users.associate = (models) => {
      Users.hasMany(models.Sales, { as: 'sales', foreignKey: 'userId' });
      Users.hasMany(models.Sales, { as: 'sales', foreignKey: 'sellerId' });
	};

	return Users;
};

module.exports = Users;