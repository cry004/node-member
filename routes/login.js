var express = require('express')
var router = express.Router()
var firebase = require('../connection/firebase_connect')
var firebaseDb = require('../connection/firebase_admin_connect')
var fireAuth = firebase.auth()

router.get('/', function (req, res) {
  res.render('login', { title: 'login' })
})
router.post('/', function (req, res) {

  fireAuth.signInWithEmailAndPassword(req.body.email, req.bodry.passwd)
  .then(function(user){
    console.log(user)
    console.log('登入成功')
  })
  .catch(function(){
    console.log('登入失敗')
  })
})
module.exports = router
