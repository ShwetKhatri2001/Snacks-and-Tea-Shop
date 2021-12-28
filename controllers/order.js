const Order = require("../models/Order");
const { validationResult } = require("express-validator");

exports.placeOrder = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { placedat, name, phone, items, subtotal } = req.body;

    try {

        const orderno = await Order.countDocuments() + 1;
        const status = "Request Received";

        const order = await Order.create({ 
            orderno,
            placedat,
            name,
            phone,
            status,
            items,
            subtotal
        })

        console.log(order);
        return res.status(200).json(order);

    } 
    catch (err) {
        if (err.code === 11000) {
          return res.status(500).json({ error: "Order with this number exist already" });
        }
        return res.status(500).json({ error: "500 Internal Error" });
    }
}

exports.editOrder = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { orderId, placedat, name, phone, items, subtotal } = req.body;
  
    try {
        const filter = { _id: orderId };
        const update = { 
            placedat, 
            name, 
            phone, 
            items, 
            subtotal 
        };

        const findResult = await Order.findOne(filter);

        if(findResult){
            const updateResult = await Order.updateOne(filter,update);
            console.log(updateResult);
            res.status(200).json({data: 'Order updated successfully' })
        }else{
            
            res.status(403).json({error: 'No such order found'})
        }
    } catch (error) {
        return res.status(400).json({ error: "Updation failed, Try again !" });
    }
}

exports.removeOrder = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    try {
        const filter = { _id: req.body.orderId };
        deleteResult = await Order.findOneAndRemove(filter);
        console.log(deleteResult);

        res.status(200).json({data: deleteResult !== null ? 'Order removed successfully' : 'can\'t remove this item'})
    } catch (error) {
        return res.status(400).json({ error: "Deletion failed, Try again !" });
    }
}