const express = require('express')

const controller = require('../../controllers/api/authController');

const router = express.Router();

router.get('/token', controller.reqtoken);

module.exports = router;