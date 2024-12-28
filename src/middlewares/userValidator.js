const {body} = require('express-validator');

const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email is not valid'),    
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
]

const registerValidations = [
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email is not valid'),    
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
        .isLength({min: 8})
        .withMessage('Password must contain at least 8 characters'),
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('lastname')
        .notEmpty()
        .withMessage('Lastname cannot be empty')
]

module.exports = {loginValidations, registerValidations};