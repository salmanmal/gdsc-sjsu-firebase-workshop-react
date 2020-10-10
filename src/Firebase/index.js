import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA0i53uMJrG7mney-nzmSSmJHhsWsbZnmE",
    authDomain: "october-9-workshop.firebaseapp.com",
    databaseURL: "https://october-9-workshop.firebaseio.com",
    projectId: "october-9-workshop",
    storageBucket: "october-9-workshop.appspot.com",
    messagingSenderId: "86637558442",
    appId: "1:86637558442:web:4679f1a563d0c51e066ed3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;