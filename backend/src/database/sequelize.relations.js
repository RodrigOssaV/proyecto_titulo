const Load = require('../model/load.model');
const Driver = require('../model/driver.model');
const Supplier = require('../model/supplier.model');
const Status_Load = require('../model/status-load.model');

Load.belongsTo(Driver, {foreignKey: 'rut_driver' });
Load.belongsTo(Supplier, {foreignKey: 'id_supplier' });

Status_Load.belongsTo(Load, {foreignKey: 'id_load' });

const Sequelize = require('sequelize');
const sequelize = require("./db");

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize;

db.user = require("../model/usuario.model")(sequelize, Sequelize);
db.role = require("../model/role.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;