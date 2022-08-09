const Users = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
		password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer",
    },
	}, 
    { timestamps: false,
      underscored:true 
    },
    );

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Sales, { as: 'sales', foreignKey: 'userId' });
  //     Users.hasMany(models.Sales, { as: 'sales', foreignKey: 'sellerId' });
	// };

	return Users;
};

module.exports = Users;