
const path = require('path');
const {validationResult} = require('express-validator')


const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    loginProcess:(req, res) => {
        const {email, password} = req.body;
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.send(errors.mapped())
        }
        console.log(errors)
        if (email === 'admincond@gmail.com' && password === "12345") {
            return res.redirect('/')
        }
        return res.redirect('/user/login');
    },
    register: (req, res) => {
        res.render('users/register');
    }
};

module.exports = controller;