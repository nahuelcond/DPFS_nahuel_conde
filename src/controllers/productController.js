const path = require('path');
const Category = require("../models/category");
const Product = require("../models/product");


const controller = {
    create: (req, res) => {
        const categories = Category.findAll();
        res.render('products/productCreation', {categories});
    },
    modify:(req, res) => {
        const product = Product.findById(req.params.id);
        const categories = Category.findAll();
        res.render('products/productModify', {product, categories});
    },
    modifyStore:(req, res) => {
        const {name, description, category, price, colour } = req.body;
        const {id} = req.body;
        if (req.file==undefined) {
            const image= undefined
            Product.update(id,{
                name,
                description,
                image,
                category,
                colour,
                price
            });
        }else{
            const image = req.file.filename
            Product.update(id,{
                name,
                description,
                image,
                category,
                colour,
                price
            });
        }

        res.redirect('/');

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