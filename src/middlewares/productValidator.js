const {body} = require('express-validator');

const createProductApiValidations = [
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isString()
        .withMessage('Name must be a string'),    
    body('description')
        .notEmpty()
        .withMessage('Description cannot be empty')
        .isString()
        .withMessage('Description must be a string'),
    body('category')
        .notEmpty()
        .withMessage('Category cannot be empty')
        .isString()
        .withMessage('Category must be a string'),
    body('colour')
        .notEmpty()
        .withMessage('Colour cannot be empty')
        .isString()
        .withMessage('Colour must be a string')
]

module.exports = {createProductApiValidations};