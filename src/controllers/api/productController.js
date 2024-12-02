const ProductModel = require('../../models/product');
const { validationResult } = require('express-validator');

const controller = {
    list: (req,res) => {
        const products = ProductModel.findAll();
        const response = {
            data: products,
            metadata: {
                status: 200,
                total: products.length
            }
        };
        res.json(response);
    },
    detail: (req,res) => {
        const product = ProductModel.findById(req.params.id);
        if (!product) {
            return res.status(404).send ({
                message: 'Product not found'
            })
        }
        const response = {
            data: product,
            metadata: {
                status: 200
            }
        }
        res.json(response);
    },
    create: (req,res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });

        }
        const {name, description, category, price, colour } = req.body;
        
        ProductModel.create({
            name,
            description,
            image: req.file?.filename,
            category,
            colour,
            price
        });
        
        res.status(201).json({
            message: 'Product created'
        })
    },
    update: (req,res) => {
        const {id} = req.params;

        const {name, description, category, price, colour } = req.body;

        const productFound = ProductModel.findById(id);

        if (!productFound) {
            return res.status(404).json({
                message: 'Product not found'
            })
        };

        ProductModel.update(id, {
            name,
            description,
            category,
            price,
            colour
        })
        res.status(202).json({message: 'Product updated'})
    },
    delete: (req,res) => {
        const {id} = req.params;

        const productFound = ProductModel.findById(id);

        if (!productFound) {
            return res.status(404).json({
                message: 'Product not found'
            })
        };
        ProductModel.delete(id);
        res.status(202).json({message: 'Product deleted'})
    }

}

module.exports = controller