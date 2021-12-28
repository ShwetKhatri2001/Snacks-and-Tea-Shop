const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    todays_sp: {
        type: Boolean,
        required: true
    },
    itemimg: {
        type: String
    }
})

const Item = mongoose.model("items", itemSchema);
module.exports = Item;
