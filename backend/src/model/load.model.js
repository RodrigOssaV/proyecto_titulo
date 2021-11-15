const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Load extends Model{};

Load.init({
    id_load: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    amount_load: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_load: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount_delivery: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    amount_not_delivery: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    cost_driver: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'Load'
});

module.exports = Load;