const express = require('express');
const path = require('path');

const upload = require('../middlewares/uploadProductImage');

const productController = require('../controllers/productController');

const router = express.Router();


router.get('/create', productController.create);
router.get('/modify/:id', productController.modify);
router.post('/create', upload.single('image'), productController.store)
router.post('/modify/:id', upload.single('image'), productController.modifyStore)


module.exports = router