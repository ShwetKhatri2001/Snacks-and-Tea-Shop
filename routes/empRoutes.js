const express = require('express');
const empRouter = express.Router();
const { addEmployee, editEmployee, removeEmployee } = require("../controllers/employee");

empRouter.post('/addemployee',addEmployee)
empRouter.post('/editemployee',editEmployee)
empRouter.post('/removeemployee',removeEmployee)

module.exports = empRouter;