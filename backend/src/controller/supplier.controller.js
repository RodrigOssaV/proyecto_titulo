const Supplier = require('../model/supplier.model');

module.exports = {
    
    add_supplier: (req, res) => {
        try {
            Supplier.create({
                name_supplier: req.body.name_supplier,
                type_supplier: req.body.type_supplier
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
        const {id_supplier} = req.params;
        try {
            Supplier.findByPk(id_supplier).then(result => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(400).json(error);
        }

    },

    delete_supplier: (req, res) => {
        const {id_supplier} = req.params;
        try {
            Supplier.destroy({
                where:{id_supplier}
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    update_supplier: (req, res) => {
        const {id_supplier} = req.params;
        try {
            Supplier.update({
                name_supplier: req.body.name_supplier,
                type: req.body.type_supplier
            },{
                where: {id_supplier}
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    best_supplier: (req, res) => {
        try {
            Supplier.findAll({
                attributes: ['name_supplier', 'total_amount'],
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
                attributes: ['name_supplier', 'total_amount'],
                limit: 3,
                order: [['total_amount', 'DESC']]
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    }
};