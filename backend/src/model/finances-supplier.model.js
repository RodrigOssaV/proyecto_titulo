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
    cost_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    benefit_empresa: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    sequelize,
    modelName: 'Finances_supplier'
});

module.exports = FinancesSupplier;
