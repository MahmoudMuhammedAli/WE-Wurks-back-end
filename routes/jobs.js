const express = require("jobs");
const router = express.Router();

router.post("/", (req, res) => {
  // add job code goes here
});

router.get("/:id", (req, res) => {
  // get job code with a specific id goes here
});

router.put("/:id", (req, res) => {
  // update jobs code goes here
});

module.exports = router;
