const express = require('express');

const userController = require('../controllers/userController');

const {loginValidations} = require('../middlewares/userValidator');

const router = express.Router();

router.get('/login', userController.login);
router.post('/login',loginValidations, userController.loginProcess);
router.get('/register', userController.register);

module.exports = router;