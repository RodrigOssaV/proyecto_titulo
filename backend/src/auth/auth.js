const jwt = require('jsonwebtoken');

module.exports = {

    verifyToken: async (req, res, next) => {
        try {
            if(!req.headers.authorization){
                return res.status(401).send('Usuario no autorizado');
            }    
            const token = req.headers.authorization;
            if(token === 'null'){
                return res.status(401).send('Usuario no autorizado');
            }
            const payload = await jwt.verify(token, 'secretkey');
            if(!payload){
                return res.status(401).send('Usuario no autorizado');
            }
            next();
        } catch (error) {
            res.status(400).json(error);
        }
    }
};