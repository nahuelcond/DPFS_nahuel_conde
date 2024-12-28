const {validationResult} = require('express-validator')

const bcrypt = require('bcryptjs')

const User = require('../models/user');
const { name } = require('ejs');



const controller = {
    login: (req, res) => {
        if (req.session.user) {
           return res.redirect('/')
        }
        res.render('users/login');
    },
    loginProcess:(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).render('users/login',{
                errors: errors.mapped()
            })
        }
        const { email, password} = req.body;
        const user = User.findByField('email', email);

        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            };
            
            return res.redirect('/')
        }
        return res.status(422).render('users/login',{
            errors: {
                credentials: {msg: 'Usuario y/o contraseña incorrectos'}
            }
        })
    },
    register: (req, res) => {
        res.render('users/register');
    },
    logout: (req,res) => {
        delete req.session.user;
        return res.redirect('/')
    }
};

module.exports = controller;