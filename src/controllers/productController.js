const path = require('path');
const Category = require("../models/category");
const Product = require("../models/product");


const controller = {
    create: (req, res) => {
        const categories = Category.findAll();
        res.render('products/productCreation', {categories});
    },
    store: (req, res) => {
        const {name, description, image, category, price, colour } = req.body;
        
        Product.create({
            name,
            description,
            image: req.file.filename,
            category,
            colour,
            price
        });
        
        res.redirect('/');
    }
};

module.exports = controller;