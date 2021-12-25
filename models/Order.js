const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderno: {
    type: Number,
    unique: true,
    required: true,
  },
  placedat: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  items: [{
      name: {
        type: String,
        required: true
      },
      quantity: { 
        type: String,
        required: true
      }
  }],
  subtotal: {
    type: Number,
    required: true
  }
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
