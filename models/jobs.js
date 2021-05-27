const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    job_name : String,
    job_des : String,
    job_id : Number,
    status : String,
    due_date : Date,
    scheduled_date : Date,
    priorty : String,
    job_duration : Number

});
const Jobs = mongoose.model("Invoices", JobsSchema);

module.exports = Jobs;
