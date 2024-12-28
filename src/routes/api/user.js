const express = require('express');

const userApiController = require('../../controllers/api/userController');
const { registerValidations, loginValidations } = require('../../middlewares/userValidator');
const {authorize} = require('../../middlewares/authMiddleware');

 

const router = express.Router();

router.use(authorize)

router.post('/',registerValidations, userApiController.create)
router.post('/login',loginValidations, userApiController.login)

module.exports = router;