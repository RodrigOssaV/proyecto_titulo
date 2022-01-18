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
            return;
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
        const {rut} = req.params;
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
    },

    best_driver: (req, res) => {
        try {
            Driver.findAll({
                attributes: ['name', 'lastname', 'total_load'],
                limit: 1,
                order: [['total_load', 'DESC']]
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    top_drivers: (req, res) => {
        try {
            Driver.findAll({
                attributes: ['name', 'lastname', 'total_load'],
                limit: 3,
                order: [['total_load', 'DESC']]
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    import_drivers: (req, res) => {
        /* console.log(req.body); */
        try {
            Driver.bulkCreate(req.body, {
                returning: true
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    }

};