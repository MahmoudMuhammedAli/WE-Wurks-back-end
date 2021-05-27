const express = require("express");
const router = express.Router();
let Contact = require("../models/contact.js");
//add a new contact
router.post("/", (req, res) => {
  let { contact_name,Phone,Email}=req.body 
  const newContact = new Contact({ contact_name,Phone,Email});
  newContact.save(function (err, contact) {
    if (err) {
      res.send("error saving contact");
    } else {
      console.log(contact);
      res.send(contact);
    }
  });
});

//get all contacts
router.get("/", (req, res) => {
  console.log("getting all contacts");
  Contact.find({}).exec(function (err, contacts) {
    if (err) {
      res.send("cant get the contacts ");
    } else {
      console.log(contacts);
      res.json(contacts);
    }
  });
});
// get specific contact
router.get("/:id", (req, res) => {
  console.log("getting a contact");
  Contact.findOne({
    _id: req.params.id,
  }).exec(function (err, contact) {
    if (err) {
      res.send("error: cant get the contact");
    } else {
      console.log(contact);
      res.json(contact);
    }
  });
});
//update a contact
router.put("/:id", (req, res) => {
    Contact.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        contact_name: req.body.name,
        //TODO: add another update prams
      },
    },
    { upsert: true },
    function (err, newContact) {
      if (err) {
        res.send("error updating the contact");
      } else {
        console.log(newContact);
        res.status(204);
      }
    }
  );
});
//delete a contact
router.delete("/:id", (req, res) => {
    Contact.findOneAndRemove(
    {
      _id: req.params.id,
    },
    function (err, contact) {
      if (err) {
        res.send("unable to remove the contact");
      } else {
        console.log(contact);
        res.status(204);
      }
    }
  );
});
module.exports = router;
