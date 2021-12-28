const express = require('express');
const orderRouter = express.Router();
const { placeOrder, editOrder, removeOrder } = require('../controllers/order');

orderRouter.post('/placeorder', placeOrder);
orderRouter.post('/editorder', editOrder);
orderRouter.post('/deleteorder', removeOrder);

module.exports = orderRouter;
