const express = require("express");
const router = express.Router();
let Invoice = require("../models/invoices.js");
//add a new invoice
router.post("/", (req, res) => {
    //const newInvoice = new Invoice() 
    // newInvoice.invoice_id = req.body.id;
    // newInvoice.invoice_name = req.body.name;
    // newInvoice.invoice_des = req.body.description;
    // newInvoice.date_added = req.body.date_added;
    // newInvoice.due_date = req.body.due_date;
    // newInvoice.terms = req.body.terms;
    // newInvoice. contract = req.body.contract;
    let { invoice_id,invoice_name,invoice_des,date_added,due_date,terms,contract} = req.body ; 
    const newInvoice = new Invoice( { invoice_id,invoice_name,invoice_des,date_added,due_date,terms,contract})
    newInvoice.save(function (err, Invoice) {
        if (err) {
            res.send("error saving invoice");
        } else {
            console.log(Invoice);
            res.send(Invoice);
        }
    });
});

//update a invoice
router.put("/:id", (req, res) => {
    Invoice.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        {
            $set: {
                name: req.body.name
                //TODO: add another update prams
            }
        },
        { upsert: true },
        function (err, newJob) {
            if (err) {
                res.send("error updating the invoice");
            } else {
                console.log(newinvoice);
                res.status(200);
            }
        }
    );
});
//delete a invoice
router.delete("/:id", (req, res) => {
    Invoice.findOneAndRemove(
        {
            _id: req.params.id,
        },
        function (err, job) {
            if (err) {
                res.send("unable to remove the invoice");
            } else {
                console.log(Invoice);
                res.status(204);
            }
        }
    );
});
module.exports = router;