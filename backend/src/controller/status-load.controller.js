const sequelize = require('../database/db');
const Status_Load = require('../model/status-load.model');

module.exports = {

    get_statusloads: async (req, res) => {
        /* try {
            Status_Load.findAll().then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        } */
        try {
            let data = await sequelize.query(`
            select loads.orden, status_loads.delivery, status_loads.not_delivery, status_loads.received, status_loads.id_status_load
            from status_loads
            left join loads on loads.id_load = status_loads.id_load
            `);
            res.status(200).json(data[0]);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    update_status: (req, res) => {
        const {id_status_load} = req.params;
        /* console.log(id_status_load); */
        try {
            Status_Load.update({
                delivery: req.body.delivery,
                not_delivery: req.body.not_delivery
            },{
                where: {id_status_load}
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        };
    }
};