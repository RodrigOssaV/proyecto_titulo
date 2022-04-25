var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const db = require('../database/sequelize.relations');
const {auth} = require('../database/config');
const sequelize = require('../database/db');
const User = db.user;
const Role = db.role;

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
                name: req.body.roles
                }
            }).then(roles => {
                user.setRoles(roles).then(() => {
                res.send({ message: "Usuario registrado con éxito!" });
                });
            });
            } else {
            // user role = 1
            user.setRoles([1]).then(() => {
                res.send({ message: "Usuario registrado con éxito!" });
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
            return res.status(404).send({ message: "Usuario no encontrado." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Contraseña invalida!"
            });
        }
        var token = jwt.sign({ id: user.id }, auth.secret, {
          expiresIn: 28800 // 8 hours
        });
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).json({
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

exports.getAllUsers = async (req, res) => {
        try {
            let data = await sequelize.query(`
            select rls.name, us.username, us.email 
            from roles as rls
            right join user_roles as usRol on rls.id = usRol.roleId
            right join users as us on usRol.userId = us.id`);
            res.status(200).json(data[0]);
        } catch (error) {
            console.log(error)
        }
};