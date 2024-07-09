var express = require('express');
var router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Post new message" });
});

router.post("/new", function(req, res) {
  messages.push({
    text: req.body.msg,
    user: req.body.author,
    added: new Date()
  })
  res.redirect("/");
})

module.exports = router;
