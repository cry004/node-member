var express = require('express');
var router = express.Router();
var firebase = require('../connection/firebase_connect');
var firebaseDb = require('../connection/firebase_admin_connect');

router.post('/', function(req, res) {
  req.checkBody("content", "內容不得為空值").notEmpty();
  var errors = req.validationErrors();
  console.log(errors);
  if (errors) {
    req.flash('errors', errors[0].msg);
    res.redirect('/');
  } else {
    firebaseDb.ref('user/' + req.session.uid).once('value', function(snapshot) {
      var nickname = snapshot.val().nickname;
      var ref = firebaseDb.ref('list').push();
      var listContent = {
        nickname: nickname,
        content: req.body.content
      }
      ref.set(listContent)
        .then(function() {
          trs.redirect('/')
        })
    })
  }

});
module.exports = router;