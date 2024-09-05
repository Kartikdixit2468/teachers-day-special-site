const express = require("express");
const router = express.Router();

router.get("/:teacher", (req, res) => {
  res.render('home', {
    teacher: req.params.teacher,
  })

});

router.get("/hello/:teacher", (req, res) => {
  res.send(`Hello! ${req.params.teacher}`);
});

module.exports = router;
