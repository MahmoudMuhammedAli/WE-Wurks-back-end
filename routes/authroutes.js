const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res) => {
  // check if there a password and an email and a name
  console.log(req.body);
  let { password } = req.body;
  let { name } = req.body;
  let { email } = req.body;
  if (!name && !email && !password) {
    console.log(name, email, password);
    return res.send("you must provide a complete data");
  }

  User.findOne({ email })
    .then((user) => {
      if (user) return res.send("the user does exist");
      // create the user
      const newUser = new User({ name, email, password });
      // now our user is created but didn't saved into our database so let's save it
      newUser.save().then((user) => res.send(user));
    })
    .catch((err) => console.log(err));
});

router.post("/login", (req, res) => {
  console.log("entered the login post");

  let { email, name, password } = req.body;

  if (!name && !email && !password) {
    return res.send("you must enter a complete data");
  }

  User.findOne({ email }).then((user) => {
    if (!user) return res.send("no matching emails");

    if (password !== user.password) return res.send("wrong password");

    const token = jwt.sign({ sub: user._id }, "our secret");

    res.send(token);
  });
});

module.exports = router;
