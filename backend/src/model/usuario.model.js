const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Usuario extends Model {};

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'Usuario'
});

module.exports = Usuario;