const FinancesSupplier = require('../model/finances-supplier.model');

module.exports = {
    
    add_finances_supplier: (req, res) => {
        try {
            FinancesSupplier.create({
                costEmpresa: req.body.costEmpresa,
                id_supplier: req.body.id_supplier
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_all_finances_supplier: (req, res) => {
        try {
            FinancesSupplier.findAll({
                /* attributes: ['costEmpresa', 'benefitEmpresa', 'id_supplier'],
                limit: 3,
                order: [['benefitEmpresa', 'DESC']] */
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            console.log(error);
        };
    },
};