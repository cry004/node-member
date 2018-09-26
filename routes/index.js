var express = require("express");
var router = express.Router();
var firebaseDb = require("../connection/firebase_admin_connect");
var firebase = require("../connection/firebase_connect");
router.get('/', function(req, res, next) {
  firebaseDb.ref('list').once('value', function(snapshot) {
    var auth = req.session.uid;
    res.render('index', {
      title: "Bulletin Board",
      auth: auth,
      errors: req.flash('errors'),
      list: snapshot.val()
    });
  })
});
/* GET home page. */
module.exports = router;