const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Driver extends Model{};

Driver.init({
    rut: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_load: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'Driver'
});

module.exports = Driver;

