const express = require("express");
const router = express.Router();
let CostItems = require("../models/cost-items.js");
//add a new CostItems
router.post("/", (req, res) => {
  let{ 
        item_name ,
        item_des,Quantity,
        Hrs,NotBillable,
        buyPrice,
        sellPrice,
        taxRate
    }=req.body ;
  const newCostItem= new CostItems({ 
        item_name ,
        item_des,
        Quantity,
        Hrs,
        NotBillable,
        buyPrice,
        sellPrice,
        taxRate
    });
  newCostItem.save(function (err, costitems) {
    if (err) {
      res.send("error saving CostItem");
    } else {
      console.log(costitems);
      res.send(costitems);
    }
  });
});

//get all CostItems
router.get("/", (req, res) => {
  console.log("getting all CostItems");
  CostItems.find({}).exec(function (err, costitems) {
    if (err) {
      res.send("cant get the costitems ");
    } else {
      console.log(costitems);
      res.json(costitems);
    }
  });
});
// get specific costitem
router.get("/:id", (req, res) => {
  console.log("getting a costitem");
  CostItems.findOne({
    _id: req.params.id,
  }).exec(function (err, costitem) {
    if (err) {
      res.send("error: cant get the costitem");
    } else {
      console.log(costitem);
      res.json(costitem);
    }
  });
});
//update a CostItem
router.put("/:id", (req, res) => {
    CostItems.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        //TODO: add another update prams
      },
    },
    { upsert: true },
    function (err, newcostitem) {
      if (err) {
        res.send("error updating the costitem");
      } else {
        console.log(newcostitem);
        res.status(204);
      }
    }
  );
});
//delete a costitem
router.delete("/:id", (req, res) => {
    CostItems.findOneAndRemove(
    {
      _id: req.params.id,
    },
    function (err, costitem) {
      if (err) {
        res.send("unable to remove the costitem");
      } else {
        console.log(costitem);
        res.status(204);
      }
    }
  );
});
module.exports = router;
