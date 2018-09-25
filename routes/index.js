var express = require("express");
var router = express.Router();
var firebaseDb = require("../connection/firebase_admin_connect");
var firebase = require("../connection/firebase_connect");
router.get("/", function(req, res, next) {
  var auth = req.session.uid;
  res.render("index", {
    title: "Bulletin Board",
    auth: auth,
    errors: req.flash('errors')
  });
});
/* GET home page. */
module.exports = router;