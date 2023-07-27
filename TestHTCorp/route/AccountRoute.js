// accountRoutes.js
const express = require('express');
const accountController = require('../controllers/AccountController');

const router = express.Router();
router.post('/timekeeping', accountController.createAccount);

module.exports = router;
