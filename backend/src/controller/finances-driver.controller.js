const FinancesDriver = require('../model/finances-driver.model');
const sequelize = require('../database/db');

module.exports = {

    get_all_finances_driver: async (req, res) => {
        /* try {
            FinancesDriver.findAll({}).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            console.log(error);
        }; */
        try {
            let data = await sequelize.query(`
            select drivers.rut, drivers.name, finances_drivers.benefit_driver
            from drivers
            left join finances_drivers on finances_drivers.rut_driver = drivers.rut;
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
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
            select rut_driver, sum(amount_load) as total_amount_loads, sum(amount_delivery) as total_amount_delivery, sum(amount_not_delivery) as total_not_deliverys, 
            max(amount_delivery) as max_delivery, min(amount_delivery) as min_delivery
            from loads
            group by (rut_driver);
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    results_all_drivers_limit: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select rut_driver, sum(amount_load) as total_amount_loads, sum(amount_delivery) as total_amount_delivery, sum(amount_not_delivery) as total_not_deliverys, 
            max(amount_delivery) as max_delivery, min(amount_delivery) as min_delivery
            from loads
            group by (rut_driver)
            limit 5`);
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
            order by dri.rut
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};