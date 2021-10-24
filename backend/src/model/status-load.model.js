const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Status_Load extends Model{};

Status_Load.init({
    id_status_load: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    delivery: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    not_delivery: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    received: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'Status_load'
});

module.exports = Status_Load;