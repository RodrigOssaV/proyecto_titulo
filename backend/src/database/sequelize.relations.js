const Load = require('../model/load.model');
const Driver = require('../model/driver.model');
const Supplier = require('../model/supplier.model');
const Status_Load = require('../model/status-load.model');

Load.belongsTo(Driver, {foreignKey: 'rut_driver' });
Load.belongsTo(Supplier, {foreignKey: 'id_supplier' });

Status_Load.belongsTo(Load, {foreignKey: 'id_load' });