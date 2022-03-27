const jwt = require('jsonwebtoken');
const {auth} = require('../database/config');
const db = require('../database/sequelize.relations');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, auth.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
            message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

/* ROLE_ADMIN */
isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "administrador") {
                next();
                return;
            }
        }
        res.status(403).send({
            message: "Require Admin Role!"
        });
        return;
    });
    });
};

/* ROL_MODERATOR */
isModerator = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "supervisor") {
                next();
                return;
            }
        }
        res.status(403).send({
            message: "Require Moderator Role!"
        });
        });
    });
};

/* ROL_USER */
isModeratorOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "supervisor") {
                next();
                return;
            }
            if (roles[i].name === "administrador") {
                next();
                return;
            }
            }
            res.status(403).send({
            message: "Require Moderator or Admin Role!"
            });
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isModeratorOrAdmin: isModeratorOrAdmin
};

module.exports = authJwt;