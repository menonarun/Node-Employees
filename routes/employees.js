const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee');

//api get method to fetch all employees
router.get('', EmployeeController.getAllEmployees);

module.exports = router;
