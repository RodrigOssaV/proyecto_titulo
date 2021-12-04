const Load = require('../model/load.model');
const sequelize = require('../database/db');
const { v4: uuid } = require('uuid');

module.exports = {

    add_load: (req, res) => {

        let codex = uuid().slice(1,8).toUpperCase();

        try {
            Load.create({
                orden: codex,
                amount_load: req.body.amount_load,
                date_load: req.body.date_load,
                rut_driver: req.body.rut_driver,
                id_supplier: req.body.id_supplier,
                cost_driver: req.body.cost_driver
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

    get_load: async (req, res) => {
        
        try {
            let data =  await sequelize.query(`
            select lo.date_load, lo.amount_load, lo.amount_delivery, lo.amount_not_delivery, sup.name_supplier
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            where lo.rut_driver = '${req.params.rut}'
            order by date_load desc`);            
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_loads_today: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select lo.date_load, lo.amount_load, lo.amount_delivery, lo.amount_not_delivery, sup.name_supplier
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            where lo.rut_driver = '${req.params.rut}'
            order by date_load desc
            limit 5`);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_loads_lastweeks: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select lo.date_load, lo.amount_load, lo.amount_delivery, lo.amount_not_delivery, sup.name_supplier
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            where lo.rut_driver = '${req.params.rut}'
            order by date_load desc
            limit 10`);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_loads_finalweeks: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select lo.date_load, lo.amount_load, lo.amount_delivery, lo.amount_not_delivery, sup.name_supplier
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            where lo.rut_driver = '${req.params.rut}'
            order by date_load desc
            limit 15`);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_load_monthly: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select monthname(date_load) as nameMonth, sum(amount_load) as total_loads_monthly, sum(amount_delivery) as total_delivery_monthly, sum(amount_not_delivery) as total_not_delivery
            from loads as lo
            left join drivers as dri on lo.rut_driver = dri.rut
            left join suppliers as sup on lo.id_supplier = sup.id_supplier
            where lo.rut_driver = '${req.params.rut}'
            group by month(date_load)
            order by date_load desc;
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.json(400).json(error);
        }
    },

    get_sum_loads: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select sum(amount_load) as sumLoads, sum(amount_delivery) as sumDeliverys, sum(amount_not_delivery) as sumNotDelivery 
            from loads`);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_total_driver: async (req, res) => {
        try {
            let data = await sequelize.query(`
            select sum(amount_load) as total_amount, sum(amount_delivery) as total_delivery, sum(amount_not_delivery) as total_not_delivery
            from loads
            where loads.rut_driver = '${req.params.rut}'
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};