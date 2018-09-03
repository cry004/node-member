var express = require('express')
var router = express.Router()
router.get('/', function (req, res) {
  res.render('signup', { title: 'Sign up'})
})

router.post('/', function (req, res) {

})
router.get('/success', function (req, res) {
  res.render('success', {
    title: 'Sign up success'
  })
})
module.exports = router
