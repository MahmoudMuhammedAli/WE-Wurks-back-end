const mongoose = require('mongoose');
const schema = mongoose.Schema;
const MainContact = new schema({
    contact_name: String,
    Phone:Number,
    Email:{ type: String,required: true , unique: true }
});

module.exports=mongoose.model('mainContact',MainContact);