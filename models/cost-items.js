const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CostItem = new schema({
    item_name: String,
    item_des: String,
    Quantity: Number,
    Hrs: Number,
    NotBillable: Boolean,
    buyPrice: Number,
    sellPrice: Number,
    taxRate: String
});

module.exports=mongoose.model('costItem',CostItem);