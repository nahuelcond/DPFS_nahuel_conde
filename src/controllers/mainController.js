
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
        const product= ProductModel.findById(req.params.id)
        res.render('products/productDetail', {productsAcs, product});
    },
    shopping: (req, res) => {
        res.render('products/shoppingCart');
    },
    galery: (req, res) => {
        const products = ProductModel.findAll();
        res.render('products/productGalery', {products});
    }
};

module.exports = controller;