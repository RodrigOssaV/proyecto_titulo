const Supplier = require('../model/supplier.model');

module.exports = {
    
    add_supplier: (req, res) => {
        try {
            Supplier.create({
                rut: req.body.rut,
                razon_social: req.body.razon,
                giro: req.body.giro,
                type_supplier: req.body.type,
                name_contact: req.body.name,
                phone_contact: req.body.phone
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_suppliers: (req, res) => {
        try {
            Supplier.findAll().then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_supplier: (req, res) => {
        const {rut} = req.params;
        try {
            Supplier.findByPk(rut).then(result => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(400).json(error);
        }

    },

    delete_supplier: (req, res) => {
        const {rut} = req.params;
        try {
            Supplier.destroy({
                where:{rut}
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    update_supplier: (req, res) => {
        const {rut} = req.params;
        try {
            Supplier.update({
                razon_social: req.body.razon,
                giro: req.body.giro,
                type_supplier: req.body.type,
                name_contact: req.body.name,
                phone_contact: req.body.phone
            },{
                where: {rut}
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    update_status: (req, res) => {
        const {rut} = req.params;
        try {
            Supplier.update({
                status: true
            },{
                where: {rut}
            }).then(result => {
                res.status(200).json({message: 'Update Status Supplier'});
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    best_supplier: (req, res) => {
        try {
            Supplier.findAll({
                attributes: ['razon_social', 'total_amount'],
                limit: 1,
                order: [['total_amount', 'DESC']]
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    top_suppliers: (req, res) => {
        try {
            Supplier.findAll({
                attributes: ['razon_social', 'total_amount'],
                limit: 3,
                order: [['total_amount', 'DESC']]
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    import_suppliers: (req, res) => {
        /* console.log(req.body); */
        try {
            Supplier.bulkCreate(req.body, {
                returning: true
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    }
};