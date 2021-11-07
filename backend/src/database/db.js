const {database} = require('./config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: database.dialect,
        logging: false,

        pool: {
            max: database.pool.max,
            min: database.pool.min,
            acquire: database.pool.acquire,
            idle: database.pool.idle
        }
    }
);

module.exports = sequelize;