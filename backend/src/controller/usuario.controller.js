/* const Usuario = require('../model/usuario.model');
const jwt = require('jsonwebtoken');
const helpers = require('../auth/encryp.auth');

module.exports = {

    registrarUsuario: async (req, res) => {
        // change prop user, email's to complicated (user experience)
        const { password } = req.body;
        const newPassword = await helpers.encryptPassword(password);
        const user = await Usuario.create({
            nickname: req.body.nickname,
            password: newPassword
        })
        const token = await jwt.sign({_id: user.id}, 'secretkey');
        res.json(token);
    },

    loguearUsuario: async (req, res) => {
        // TODO validate user and password
        const { nickname, password } = req.body;
        const user = await Usuario.findOne({where: {nickname: nickname}});
        if(!user) return res.status(401).json({message: "Usuario no encontrado"});
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword){
            const token = await jwt.sign({_id: user.id}, 'secretkey');
            res.json(token);
        };
    }
} */

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const db = require('../database/sequelize.relations');
const {auth} = require('../database/config');
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.signup = (req, res) => {
    // Save User to Database
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                name: {
                    [Op.or]: req.body.roles
                }
                }
            }).then(roles => {
                user.setRoles(roles).then(() => {
                res.send({ message: "User was registered successfully!" });
                });
            });
            } else {
            // user role = 1
            user.setRoles([1]).then(() => {
                res.send({ message: "User was registered successfully!" });
            });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id }, auth.secret, {
          expiresIn: 86400 // 24 hours
        });
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};