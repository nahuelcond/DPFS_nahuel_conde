const express = require('express');

const mainController = require('../controllers/mainController')

const router = express.Router();

router.get('/', mainController.index);
router.get('/product/:id', mainController.product);
router.get('/shoppingCart', mainController.shopping);
router.get('/galery', mainController.galery);

module.exports = router;