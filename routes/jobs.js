const express = require("express");
const router = express.Router();
const Job = require("../models/jobs.js");
const {handleAuthentication} = require("../helpers")
//add a new job
router.post("/",handleAuthentication, (req, res) => {
  var newJob = new Job();

  newJob.job_name = req.body.name;
  newJob.job_des = req.body.description;
  newJob.job_id = req.body.id;
  newJob.status = req.body.status;
  newJob.due_date = req.body.due_date;
  newJob.scheduled_date = req.body.date;
  newJob.priorty = req.body.priorty;
  newJob.job_duration = req.body.job_duration;

  newJob.save(function (err, job) {
    if (err) {
      res.send("error saving job");
    } else {
      console.log(job);
      res.send(job);
    }
  });
});

//get all jobs
router.get("/", handleAuthentication,(req, res) => {
  console.log("getting all jobs");
  Job.find({}).exec(function (err, jobs) {
    if (err) {
      res.send("cant get the jobs ");
    } else {
      console.log(jobs);
      res.json(jobs);
    }
  });
});
// get specific job
router.get("/:id",handleAuthentication, (req, res) => {
  console.log("getting a job");
  Book.findOne({
    _id: req.params.id,
  }).exec(function (err, job) {
    if (err) {
      res.send("error: cant get the job");
    } else {
      console.log(job);
      res.json(job);
    }
  });
});
//update a job
router.put("/:id", handleAuthentication,(req, res) => {
  Job.findOneAndUpdate(
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
    function (err, newJob) {
      if (err) {
        res.send("error updating the job");
      } else {
        console.log(newJob);
        res.status(204);
      }
    }
  );
});
//delete a job
router.delete("/:id",handleAuthentication, (req, res) => {
  Job.findOneAndRemove(
    {
      _id: req.params.id,
    },
    function (err, job) {
      if (err) {
        res.send("unable to remove the job");
      } else {
        res.status(204);
      }
    }
  );
});


// TODO:assign job
router.put("/:id/assign", (req, res) => {
  Job.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        assignedTo: req.body.assignedTo,
      },
    },
    { upsert: true },
    function (err, newJob) {
      if (err) {
        res.send("error updating the job");
      } else {
        console.log(newJob);
        res.status(204);
      }
    }
  );
});

module.exports = router;
