const FinancesDriver = require('../model/finances-driver.model');

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
    }
};