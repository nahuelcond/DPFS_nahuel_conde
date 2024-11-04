const { register } = require('module');
const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('products/index');
    },
    login: (req, res) => {
        res.render('users/login');
    },
    product: (req, res) => {
        res.render('products/productDetail');
    },
    register: (req, res) => {
        res.render('users/register');
    },
    shopping: (req, res) => {
        res.render('products/shoppingCart');
    },
    create: (req, res) => {
        res.render('products/productCreation');
    },
    galery: (req, res) => {
        res.render('products/productGalery');
    }
};

module.exports = controller;