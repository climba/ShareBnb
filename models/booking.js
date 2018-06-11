module.exports = function (sequelize, DataTypes) {
    var Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        start_date: {
            type: DataTypes.DATE,
        },
        end_date: {
            type: DataTypes.DATE,
        }

    });

    Booking.associate = function(models) {
        // We're saying that a Asset should belong to an User
        // An Asset can't be created without an user due to the foreign key constraint
        Booking.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Booking;
};