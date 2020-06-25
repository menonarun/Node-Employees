const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee');

//api get method to fetch all employees
router.get('', EmployeeController.getAllEmployees);
//api get method to fetch an employee by employee number
router.get('/:id',EmployeeController.getEmployeeById);
//api get method to fetch all employees in a department
router.get('/department/:id',EmployeeController.getEmployeesByDepartment);
//api get method to fetch all employees in a salary range
router.get('/salary/:r1/:r2',EmployeeController.getEmployeesBySalaryRange);

//api post method to insert a new employee
router.post('', EmployeeController.createEmployee);
//put method to update an existing employee
router.put('/:id', EmployeeController.updateEmployee);
//api delete method to delete an employee
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;
