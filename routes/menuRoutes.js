const express = require('express');
const menuRouter = express.Router();
const { addItem, editItem, removeItem, getItems, getTodayssp } = require("../controllers/menu");

menuRouter.post('/additem', addItem)
menuRouter.post('/edititem', editItem)
menuRouter.post('/removeitem', removeItem)
menuRouter.get('/getitems', getItems)
menuRouter.get('/gettodayssp', getTodayssp);

module.exports = menuRouter;