const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();

const User = require("./models/user");
const keys = require("./config/keys");

// our middle wares
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));

// the following line to manage us to respond with json
app.use(express.json());

// our custom middle wares

const handleAuthentication = (req, res, next) => {
  // get your token
  const authorizeHeader = req.headers["authorization"];

  // we will assume that authorize header is in that shape "authorization:Bearer AToken"
  const token = authorizeHeader && authorizeHeader.split(" ")[1];
  // now check if there is a token or not
  if (!token) return res.sendStatus(401);

  // verfiy it and get your payload
  const payload = jwt.verify(token, "our secret");
  // this verify function verify that the hashed header and the hashed body matches their hashed signature

  // authenticate the user
  User.findById(payload.sub).then((user) => {
    if (!user) return console.log("no matched user");
    req.user = user;
    next();
  });
};

// our routes

app.post("/signup", (req, res) => {
  // check if there a password and an email and a name
  console.log(req.body);
  let { password } = req.body;
  let { name } = req.body;
  let { email } = req.body;
  if (!name && !email && !password) {
    console.log(name, email, password);
    return res.send("you must provide a complete data");
  }

  // check if there exist a user with these credential

  User.findOne({ email }).then((user) => {
    if (user) return res.send("the user does exist");
    // create the user
    const newUser = new User({ name, email, password });
    // now our user is created but didn't saved into our database so let's save it
    newUser.save().then((user) => res.send(user));
  });
});
app.post("/login", (req, res) => {
  console.log("entered the login post");
  let { email, name, password } = req.body;
  if (!name && !email && !password) {
    return res.send("you must enter a complete data");
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.send("no matching emails");
    if (password !== password) return res.send("wrong password");
    const token = jwt.sign({ sub: user._id }, "our secret");
    console.log(token);
    res.send(token);
  });
});
app.get("/posts", handleAuthentication, (req, res) => {
  console.log(req.user);
  res.send("posts");
});
const PORT = process.env.PORT || 3000;
mongoose.connect(keys.MONG_URI, () => {
  console.log("connected successfully");
  app.listen(PORT);
});

// and now we are done,  but there exist one thing,  how will we use this approach and integrate with our client side
// i will tell you how this integration would work ,
// send this token after the user is authenticated to the client and the client will send this token every time the user needs some thing from the server
//you must send it  in the header of that request
// and the header of the authenticated request must contain the following
// {authorization:Berear ATokenToBeAuthenticaed}
// and now we are done
