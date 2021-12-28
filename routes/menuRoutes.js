const express = require('express');
const menuRouter = express.Router();
const { addItem, editItem, removeItem } = require("../controllers/menu");

menuRouter.post('/additem', addItem)
menuRouter.post('/edititem', editItem)
menuRouter.post('/removeitem', removeItem)

module.exports = menuRouter;