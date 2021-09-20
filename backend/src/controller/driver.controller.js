const Driver = require('../model/driver.model');

module.exports = {

    add_driver: (req, res) => {
        try {
            Driver.create({
                rut: req.body.rut,
                name: req.body.name,
                lastname: req.body.lastname,
                phone: req.body.phone
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_drivers: (req, res) => {
        try {
            Driver.findAll().then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_driver: (req, res) => {
        const {rut} = req.params;
        try {
            Driver.findByPk(rut).then(result => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    delete_driver: (req, res) => {
        const {rut} = req.params;
        try {
            Driver.destroy({
                where:{rut}
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },
    
    update_driver: (req, res) => {
        /* console.log(req.body); */
        const {rut} = req.params;
        /* console.log(rut); */
        try {
            Driver.update({
                rut: req.body.rut,
                name: req.body.name,
                lastname: req.body.lastname,
                phone: req.body.phone
            },{
                where: {rut}
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    }
};