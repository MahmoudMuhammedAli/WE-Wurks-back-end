const mongoose = require('mongoose');
const schema = mongoose.Schema;
const MainAddress = new schema({
    Address: String,
    city:String,
    country:String,
    ZipCode: Number,
    makeSite: Boolean
});

module.exports=mongoose.model('mainAddress',MainAddress);