
const path = require('path');

const ProductModel = require('../models/product');

const controller = {
    index : (req, res) => {
        const products = ProductModel.findAll();
        const productsMen = ProductModel.findByCategory("hombre");
        const productsWomen = ProductModel.findByCategory("mujer");
        const productsAcs = ProductModel.findByCategory("accesorio");
        res.render('products/index', {  productsMen, productsWomen, productsAcs });
    },
    product: (req, res) => {
        const productsAcs = ProductModel.findByCategory("accesorio");
        res.render('products/productDetail', {productsAcs});
    },
    shopping: (req, res) => {
        res.render('products/shoppingCart');
    },
    create: (req, res) => {
        res.render('products/productCreation');
    },
    galery: (req, res) => {
        const products = ProductModel.findAll();
        res.render('products/productGalery', {products});
    }
};

module.exports = controller;