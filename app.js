const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const authRoutes = require("./routes/authroutes");
const jobsRoutes = require("./routes/jobs");
const userRoutes = require("./routes/user");
//const invoicesRoutes = require("./routes/invoices")
// our middle wares
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// our routes
app.use(authRoutes);
// all jobs routes
app.use("/jobs", jobsRoutes);
// all jobs routes
app.use("/user", userRoutes);
// all jobs routes
//app.use("/invoices", invoicesRoutes);

const PORT = process.env.PORT || 3000;
const MONG_URI =process.env.URL;
mongoose
  .connect(MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // object of type Promise
  .then((connection) => {
    console.log("connected!!!"); 
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
