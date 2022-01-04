const express = require('express');
const empRouter = express.Router();
const { addEmployee, editEmployee, removeEmployee, getEmployees } = require("../controllers/employee");

empRouter.post('/addemployee',addEmployee)
empRouter.post('/editemployee',editEmployee)
empRouter.post('/removeemployee',removeEmployee)
empRouter.get('/getemployees', getEmployees)

module.exports = empRouter;