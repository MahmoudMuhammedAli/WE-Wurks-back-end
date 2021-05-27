const express = require("express");
const router = express.Router();
let user = require("../models/user.js");
//add a new user
router.post("/", (req, res) => {
  var newUser = new user();

  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.isManager = req.body.isManager;


  newUser.save(function (err, user) {
    if (err) {
      res.send("error saving user");
    } else {
      console.log(user);
      res.send(user);
    }
  });
});

//get all users
router.get("/", (req, res) => {
  console.log("getting all users");
  user.find({}).exec(function (err, users) {
    if (err) {
      res.send("cant get the users ");
    } else {
      console.log(users);
      res.json(users);
    }
  });
});
// get specific user
router.get("/:id", (req, res) => {
  console.log("getting a user");
  user.findOne({
    _id: req.params.id,
  }).exec(function (err, User) {
    if (err) {
      res.send("error: cant get the user");
    } else {
      console.log(User);
      res.json(User);
    }
  });
});
//update a user
router.put("/:id", (req, res) => {
  user.findOneAndUpdate(
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
    function (err, newuser) {
      if (err) {
        res.send("error updating the user");
      } else {
        console.log(newuser);
        res.status(204);
      }
    }
  );
});
//delete a user
router.delete("/:id", (req, res) => {
  user.findOneAndRemove(
    {
      _id: req.params.id,
    },
    function (err, User) {
      if (err) {
        res.send("unable to remove the user");
      } else {
        console.log(User);
        res.status(204);
      }
    }
  );
});
module.exports = router;
