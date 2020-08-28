const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_, res) {
  // Should be modified according to whether user is logged in or not
  res.json({
    title: "MedAid",
    body: "A simple solution to keep you healthy!"
  });
});

module.exports = router;
