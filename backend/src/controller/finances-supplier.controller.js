const FinancesSupplier = require('../model/finances-supplier.model');
const sequelize = require('../database/db');

module.exports = {
    
    add_finances_supplier: (req, res) => {
        try {
            FinancesSupplier.create({
                cost_empresa: req.body.costEmpresa,
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

    get_total_benefit_supplier: (req, res) => {
        try {
            FinancesSupplier.sum('benefit_empresa').then(result => {
                res.status(200).json({total_benefit_supplier: result});
            });
        } catch (error) {
            console.log(error)
        }
    },

    results_all_suppliers: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select sum(amount_load) as total_amount_loads, sum(amount_delivery) as total_amount_delivery, sum(amount_not_delivery) as total_not_deliverys, sup.name_supplier,
            max(amount_delivery) as max_delivery, min(amount_delivery) as min_delivery
            from loads
            left join suppliers sup on sup.id_supplier = loads.id_supplier
            group by (sup.id_supplier);
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_global_benefits: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select distinct table_drivers.*, table_suppliers.*
            from loads, 
            (select sum(finances_drivers.benefit_driver) as benefits_drivers from finances_drivers) as table_drivers,
            (select sum(finances_suppliers.benefit_empresa) as benefits_empresa from finances_suppliers) as table_suppliers;
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};