const express = require("invoices");
const router = express.Router();
import Invoice from "../models/invoices";
//add a new invoice
router.post("/", (req, res) => {
    var newinvoice = new Invoice();
    newinvoice.invoice_id = req.body.id;
    newinvoice.invoice_name = req.body.name;
    newinvoice.invoice_des = req.body.description;
    newinvoice.date_added = req.body.date_added;
    newinvoice.due_date = req.body.due_date;
    newinvoice.terms = req.body.terms;
    newinvoice, contract = req.body.contract;

    newinvoice.save(function (err, Invoice) {
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