const { register } = require('module');
const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('login');
    },
    product: (req, res) => {
        res.render('productDetail');
    },
    register: (req, res) => {
        res.render('register');
    }
};

module.exports = controller;