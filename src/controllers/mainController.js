
const path = require('path');

const ProductModel = require('../models/product');

const controller = {
    index : (req, res) => {
        const products = ProductModel.findAll();
        res.render('products/index');
    },
    product: (req, res) => {
        res.render('products/productDetail');
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