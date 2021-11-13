const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class FinancesSupplier extends Model{};

FinancesSupplier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    costEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    benefitEmpresa: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    sequelize,
    modelName: 'FinancesSupplier'
});

module.exports = FinancesSupplier;
