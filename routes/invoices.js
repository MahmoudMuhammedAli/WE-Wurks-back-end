const express = require("express");
const router = express.Router();
let Invoice = require("../models/invoices.js");
const {handleAuthentication} = require("../helpers")

//add a new invoice
router.post("/",  handleAuthentication,(req, res) => {
  let {
    invoice_id,
    invoice_name,
    invoice_des,
    date_added,
    due_date,
    terms,
    contract,
  } = req.body;
  const newInvoice = new Invoice({
    invoice_id,
    invoice_name,
    invoice_des,
    date_added,
    due_date,
    terms,
    contract,
  });
  newInvoice.save(function (err, invoice) {
    if (err) {
      res.send("error saving invoice");
    } else {
      console.log(invoice);
      res.send(invoice);
    }
  });
});

//update a invoice
router.put("/:id", handleAuthentication, (req, res) => {
  Invoice.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name: req.body.name,
        //TODO: add another update prams
      },
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
router.delete("/:id", handleAuthentication, (req, res) => {
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
