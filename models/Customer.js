const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Customer = new schema({
    Frist_name: String,
    Last_name: String,
    isCompany: Boolean
});

module.exports=mongoose.model('customer',Customer);