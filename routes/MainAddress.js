const express = require("express");
const router = express.Router();
let MainAddress = require("../models/MainAdress.js");
//add a new Address
router.post("/", (req, res) => {
  var newMainAdress = new MainAddress();

  newMainAdress.Adreess = req.body.Adreess;
  newMainAdress.city = req.body.city;
  newMainAdress.country = req.body.country;
  newMainAdress.ZipCode = req.body.ZipCode;
  newMainAdress.makesite = req.body.makesite;

  newMainAdress.save(function (err, MainAddress) {
    if (err) {
      res.send("error saving Address");
    } else {
      console.log(MainAddress);
      res.send(MainAddress);
    }
  });
});

/*//get all Address
router.get("/", (req, res) => {
  console.log("getting all Address");
  MainAddress.find({}).exec(function (err, MainAddress) {
    if (err) {
      res.send("cant get the Address ");
    } else {
      console.log(MainAddress);
      res.json(MainAddress);
    }
  });
});*/

// get specific Address
router.get("/:id", (req, res) => {
  console.log("getting a Address");
  Book.findOne({
    _id: req.params.id,
  }).exec(function (err, MainAddress) {
    if (err) {
      res.send("error: cant get the Address");
    } else {
      console.log(MainAddress);
      res.json(MainAddress);
    }
  });
});
//update a Address
router.put("/:id", (req, res) => {
  MainAddress.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        Adreess: req.body.Adreess,
        //TODO: add another update prams
      },
    },
    { upsert: true },
    function (err, newMainAdress) {
      if (err) {
        res.send("error updating the job");
      } else {
        console.log(newMainAdress);
        res.status(204);
      }
    }
  );
});
//delete a Address
/*
router.delete("/:id", (req, res) => {
  MainAddress.findOneAndRemove(
    {
      _id: req.params.id,
    },
    function (err, job) {
      if (err) {
        res.send("unable to remove the Address");
      } else {
        res.status(204);
      }
    }
  );
});*/
module.exports = router;
