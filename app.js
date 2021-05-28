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
const contact = require("./routes/contact");
const costItems = require("./routes/cost-items");
const customer = require("./routes/Customer");
const mainAddress = require("./routes/MainAddress");
const cors = require("cors");
// our middle wares

app.use(cors());
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// our routes
app.use(authRoutes);

app.use("/jobs", jobsRoutes);

app.use("/user", userRoutes);

app.use("/invoices", invoicesRoutes);

app.use("/contact", contact);
app.use("/costItems", costItems);
app.use("/customer", customer);
app.use("/mainAddress", mainAddress);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connection) => {
    console.log("connected!!!");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
