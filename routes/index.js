var express = require('express')
var router = express.Router()
var firebaseDb = require('../connection/firebase_admin_connect')
var firebase = require('../connection/firebase_connect')
router.get('/', function (req, res, next) {
  console.log(firebase.auth())
  firebaseDb.ref().once('value', function (snapshot) {
    console.log(snapshot.val())
  })
  res.render('index', {
    title: 'Bulletin Board'
  })
})
/* GET home page. */
module.exports = router
