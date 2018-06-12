module.exports = function (sequelize, DataTypes) {
    var Asset = sequelize.define("Asset", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        available_time_start: {
            type: DataTypes.TIME,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        available_time_end: {
            type: DataTypes.TIME,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        image_url_1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        image_url_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        image_url_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        image_url_4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        is_booked: {
            type: DataTypes.BOOLEAN,
        },
        booked_from: {
            type: DataTypes.DATE,
        },

        booked_until: {
            type: DataTypes.DATE,
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
        images: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });

    // Asset.associate = function(models) {
    //     // We're saying that a Asset should belong to an User
    //     // An Asset can't be created without an user due to the foreign key constraint
    //     Asset.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };
    return Asset;
};