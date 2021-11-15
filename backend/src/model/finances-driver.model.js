const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class FinancesDriver extends Model{};

FinancesDriver.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    benefit_driver: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    sequelize,
    modelName: 'Finances_driver'
});

module.exports = FinancesDriver;