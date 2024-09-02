const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('home')
});

router.get("/home", (req, res) => {
  res.send("Hello Home!");
});

module.exports = router;
