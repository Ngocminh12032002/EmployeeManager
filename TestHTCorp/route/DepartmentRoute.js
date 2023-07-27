const express = require('express');
const departmentController = require('../controllers/DepartmentController')

const router = express.Router();
router.get('/department/:departmentId', departmentController.getEmployeeByDepartment)

module.exports = router

