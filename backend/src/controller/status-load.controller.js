const Status_Load = require('../model/status-load.model');

module.exports = {

    get_statusloads: (req, res) => {
        try {
            Status_Load.findAll().then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    update_status: (req, res) => {
        const {id_status_load} = req.params;
        console.log(id_status_load);
        try {
            Status_Load.update({
                amount_delivery: req.body.amount_delivery
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