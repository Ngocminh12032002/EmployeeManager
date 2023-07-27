const express = require('express');
const employeeController = require('../controllers/EmployeeController')

const router = express.Router();
router.post('/employee', employeeController.createEmployee)
router.put('/employee/:id', employeeController.editEmployee)
router.delete('/employee/:id', employeeController.deleteEmployee)

module.exports = router

