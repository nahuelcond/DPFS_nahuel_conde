const express = require('express');
const path = require('path');

const upload = require('../middlewares/uploadProductImage');

const productController = require('../controllers/productController');

const router = express.Router();


router.get('/create', productController.create);
router.post('/create', upload.single('image'), productController.store)

module.exports = router