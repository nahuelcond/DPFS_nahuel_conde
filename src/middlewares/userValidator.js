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

module.exports = {loginValidations};