var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Why isnt my code working!",
    user: "Elvin",
    added: new Date()
  }
];

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
