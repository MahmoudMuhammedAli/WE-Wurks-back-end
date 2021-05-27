const express = require("jobs");
const router = express.Router();
import Job from "../models/jobs"

router.post("/", (req, res) => {
  // add job code goes here
});

router.get("/:id", (req, res) => {
  console.log('getting all jobs');
  Book.find({})
    .exec(function(err, jobs) {
      if(err) {
        res.send('cant get the jobs ')
      } else {
        console.log(jobs);
        res.json(jobs);
      }
    });
});

router.put("/:id", (req, res) => {
  // update jobs code goes here
});

router.delete("/:id", (req, res) => {
  Job.findOneAndRemove({
    _id: req.params.id
  }, function(err, job) {
    if(err) {
      res.send('unable to remove the job')
    } else {
      console.log(job);
      res.status(204);
    }
  });
})
module.exports = router;
