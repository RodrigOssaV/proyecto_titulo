const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Supplier extends Model {};

Supplier.init({
    id_supplier: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name_supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status_supplier: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'Supplier'
});

module.exports = Supplier;