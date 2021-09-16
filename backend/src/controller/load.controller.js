const Load = require('../model/load.model');

module.exports = {

    add_load: (req, res) => {
        try {
            Load.create({
                amount_load: req.body.amount_load,
                date_load: req.body.date_load,
                rut_driver: req.body.rut_driver,
                id_supplier: req.body.id_supplier
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_loads: (req, res) => {
        try {
            Load.findAll().then(result => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(400).json(error)
        }
    },

    get_load: (req, res) => {
        const {rut} = req.params;
        try {
            Load.findAll({where:{rut_driver: rut}}).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    }
};