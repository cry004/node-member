var express = require("express");
var router = express.Router();
var firebase = require("../connection/firebase_connect");
var firebaseDb = require("../connection/firebase_admin_connect");
var fireAuth = firebase.auth();

router.get("/", function(req, res) {
  res.render("login", {title: "login"});
});
router.post("/", function(req, res) {
  fireAuth
    .signInWithEmailAndPassword(req.body.email, req.body.passwd)
    .then(function(user) {
      //登入成功
      req.session.uid = user.uid;
      res.redirect("/");
    })
    .catch(function(error) {
      console.log(error);
      console.log("登入失敗");
    });
});
module.exports = router;
