const express = require("express");
const router = express.Router();
let customer = require("../models/Customer.js");
//add a new customer
router.post("/", (req, res) => {
  var newCustomer = new customer();

  newCustomer.First_name = req.body.First_name;
  newCustomer.Last_name = req.body.Last_name;
  newCustomer.isCompany = req.body.isCompany;

  newCustomer.save(function (err, customer) {
    if (err) {
      res.send("error saving customer");
    } else {
      console.log(customer);
      res.send(customer);
    }
  });
});

//get all customer
router.get("/", (req, res) => {
  console.log("getting all customer");
  customer.find({}).exec(function (err, customer) {
    if (err) {
      res.send("cant get the customers ");
    } else {
      console.log(customer);
      res.json(customer);
    }
  });
});
// get specific customer
router.get("/:id", (req, res) => {
  console.log("getting a customer");
  Book.findOne({
    _id: req.params.id,
  }).exec(function (err, customer) {
    if (err) {
      res.send("error: cant get the customer");
    } else {
      console.log(customer);
      res.json(customer);
    }
  });
});
//update a customer
router.put("/:id", (req, res) => {
  customer.findOneAndUpdate(
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
    function (err, newCustomer) {
      if (err) {
        res.send("error updating the customer");
      } else {
        console.log(newCustomer);
        res.status(204);
      }
    }
  );
});
//delete a customer
router.delete("/:id", (req, res) => {
  customer.findOneAndRemove(
    {
      _id: req.params.id,
    },
    function (err, customer) {
      if (err) {
        res.send("unable to remove the customer");
      } else {
        res.status(204);
      }
    }
  );
});
module.exports = router;
