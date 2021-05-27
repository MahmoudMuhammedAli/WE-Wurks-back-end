const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const authRoutes = require("./routes/authroutes");
const jobsRoutes = require("./routes/jobs");
const userRoutes = require("./routes/user");
const invoicesRoutes = require("./routes/invoices");
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
app.use("/invoices", invoicesRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
console.log(
  "mongodb+srv://mohamed:mongodb+srv://mohamed:Password@cluster0.gbtdd.mongodb.net/wewurx?retryWrites=true&w=majority",
  "from mongo uri \n\n\n\n"
);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connection) => {
    console.log("connected!!!");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
