var admin = require('firebase-admin')

var serviceAccount = require('../node-member-13d96-firebase-adminsdk-3g8l7-689ac3c540.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://node-member-13d96.firebaseio.com'
})

var db = admin.database()

module.exports = db
