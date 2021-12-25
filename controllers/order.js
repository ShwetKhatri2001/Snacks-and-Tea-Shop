const Order = require("../models/Order");

exports.placeOrder = async (req,res) => {

    const { placedat, name, phone, items, subtotal } = req.body;

    try {

        const orderno = await Order.countDocuments() + 1;
        const status = "Request Received"

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