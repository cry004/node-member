var firebase = require('firebase');
var config = {
  apiKey: 'AIzaSyBE5_odhSXyiF18FZlloRx643RaHGp3VPw',
  authDomain: 'node-member-13d96.firebaseapp.com',
  databaseURL: 'https://node-member-13d96.firebaseio.com',
  projectId: 'node-member-13d96',
  storageBucket: 'node-member-13d96.appspot.com',
  messagingSenderId: '1078839257416'
};
firebase.initializeApp(config);

module.exports = firebase;
