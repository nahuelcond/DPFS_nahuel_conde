const express = require('express');

const productApiController = require('../../controllers/api/productController');

const upload = require('../../middlewares/uploadProductImage');
const { createProductApiValidations } = require('../../middlewares/productValidator')
const {authorize}= require('../../middlewares/authMiddleware')


const router = express.Router();

router.get('/', productApiController.list);
router.get('/:id', productApiController.detail);
router.post('/', upload.single('image'), createProductApiValidations ,productApiController.create);
router.put('/:id', upload.single('image'), createProductApiValidations ,productApiController.update);
router.delete('/:id', productApiController.delete);



module.exports = router;