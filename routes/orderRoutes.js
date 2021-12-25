const express = require('express');
const orderRouter = express.Router();
const { placeOrder } = require('../controllers/order');

//Tags
/**
 * @swagger
 * tags: 
 *     name: Order
 *     description: The order managing API
 * 
 */

// Order Routes
/**
 * @swagger
 * /api/order/placeorder:
 *  post:
 *     description: place order route
 *     tags: [Order]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    $ref: '#/components/schemas/Order'
 *     responses:
 *        '200':
 *            summary: Order Placed Successfully
 *            content:
 *               application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Order'           
 *        '500':
 *            summary: Internal Error
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: OrderNo exist already ? Internal error has accured
 */
orderRouter.post('/placeorder', placeOrder);

module.exports = orderRouter;

// Models
/**
 * @swagger
 * components:
 *    schemas:
 *      Order:
 *         type: object
 *         required:
 *            - orderno
 *            - placedat
 *            - name
 *            - phone
 *            - status
 *            - items
 *            - subtotal
 *         properties:
 *            _id: 
 *               type: string
 *               description: auto-generated unique id for order
 *            orderno:
 *               type: string
 *               description: Next Order No.
 *            placedat: 
 *               type: string
 *               description: Time of placing order
 *            name: 
 *               type: string
 *               description: Name of the user who placed order
 *            phone: 
 *               type: string
 *               description: Phone no. of the user who placed order
 *            status: 
 *               type: string
 *               description: current status of the order
 *            items:
 *               type: array
 *               description: list of items in order
 *               items:
 *                   type: object
 *                   properties:
 *                       name:
 *                          type: string
 *                          description: name of item at this indexe
 *                       quantity:
 *                           type: string
 *                           description: quantity of that item in order
 *            subtotal:
 *               type: string
 *               description: SubTotal of the order
 *         example:
 *            _id     : 40ed9df9aac5bc0045746fc1
 *            orderno : 150
 *            placedat: 6:40 PM
 *            name    : Shwet Khatri
 *            phone   : 9538284927
 *            status  : Being Prepared
 *            items   : [{ name : Aaloo Paratha, quantity : 2}, { name : Tea, quantity: 1}]
 *            subtotal: 120 
 *             
 */