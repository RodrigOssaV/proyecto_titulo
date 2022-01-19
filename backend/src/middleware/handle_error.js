const Driver = require('../model/driver.model');
const Supplier = require('../model/supplier.model');

// Si driver RUN driver existe
handle_error_driver = (req, res, next) => {
    const run = req.body.run;
    Driver.findByPk(run).then(result => {
        if(result){
            res.status(400).send({
                message: "Failed! RUN is already in the system!"
            });
            return;
        }
        next();
    });
}

handle_error_supplier = (req, res, next) => {
    const rut = req.body.rut;
    Supplier.findByPk(rut).then(result => {
        if(result){
            res.status(400).send({
                message: "Failed! RUT is already in the system!"
            });
            return;
        };
        next();
    });
}

const handle_error = {
    handleErrorDriver: handle_error_driver,
    handleErrorSupplier: handle_error_supplier
};

module.exports = handle_error;