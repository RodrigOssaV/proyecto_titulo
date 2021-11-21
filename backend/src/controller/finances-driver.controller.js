const FinancesDriver = require('../model/finances-driver.model');
const sequelize = require('../database/db');

module.exports = {

    get_all_finances_driver: (req, res) => {
        try {
            FinancesDriver.findAll({}).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            console.log(error);
        };
    },

    get_total_benefit_driver: (req, res) => {
        try {
            FinancesDriver.sum('benefit_driver').then(result => {
                res.status(200).json({total_benefit_driver: result});
            });
        } catch (error) {
            console.log(error)
        }
    },

    results_all_drivers: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select rut_driver, sum(amount_load) as total_amount_loads, sum(amount_delivery) as total_amount_delivery, sum(amount_not_delivery) as total_not_deliverys 
            from loads
            group by (rut_driver)
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    results_drivers_monthly: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select monthname(date_load) as nameMonth, sum(amount_load) as total_loads_monthly, sum(amount_delivery) as total_delivery_monthly, sum(amount_not_delivery) as total_not_delivery
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            group by month(date_load)
            order by date_load desc;
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    results_drivers_by_suppliers: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select sum(lo.amount_load) as total_amount, sum(lo.amount_delivery) as total_delivery, sum(lo.amount_not_delivery) as total_not_delivery, dri.rut, sup.name_supplier
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            group by dri.rut, sup.name_supplier
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};