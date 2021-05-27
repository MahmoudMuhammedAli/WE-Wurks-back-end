const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoicesSchema = new Schema({
  invoice_name: String,
  invoice_id: Number,
  invoice_des: String,
  date_added: Date,
  due_date: Date,
  terms: String,
  contract: String,
});

const Invoices = mongoose.model("Invoices", InvoicesSchema);

module.exports = Invoices;
