const express = require('express');
const orderRouter = express.Router();
const { placeOrder, editOrder, removeOrders, getOrders } = require('../controllers/order');

orderRouter.post('/placeorder', placeOrder)
orderRouter.post('/editorder', editOrder)
orderRouter.post('/removeorders', removeOrders)
orderRouter.get('/getorders', getOrders)

module.exports = orderRouter;
