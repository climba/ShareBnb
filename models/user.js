// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     name: DataTypes.STRING,
//     password: DataTypes.STRING
//   });
//   return User;
// };

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        is_host: {
            type: DataTypes.BOOLEAN,

        }
    });


//   User.associate = function(models) {
//       // Associating Users with Assets
//       // When an Users is deleted, also delete any associated Assets
//       User.hasMany(models.Asset, {
//         onDelete: "cascade"
//       });
//     };
//     User.associate = function(models) {
//         // Associating Users with Assets
//         // When an Users is deleted, also delete any associated Assets
//         User.hasMany(models.Booking, {
//           onDelete: "cascade"
//         });
//       };  
  return User;

};