const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Supplier extends Model {};

Supplier.init({
    rut: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    razon_social: {
        type: DataTypes.STRING,
        allowNull: false
    },
    giro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name_contact: {
        type: DataTypes.STRING,
    },
    phone_contact: {
        type: DataTypes.INTEGER,
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
    timestamps: true,
    sequelize,
    modelName: 'Supplier'
});

module.exports = Supplier;