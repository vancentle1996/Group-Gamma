import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2ocwqLB2amQG3xy1GJkAGETkN6Bp_-IE",
    authDomain: "firegram-assignment-4-comsc230.firebaseapp.com",
    databaseURL: "https://firegram-assignment-4-comsc230.firebaseio.com",
    projectId: "firegram-assignment-4-comsc230",
    storageBucket: "firegram-assignment-4-comsc230.appspot.com",
    messagingSenderId: "474992825861",
    appId: "1:474992825861:web:406d86f9b534ab6012ae6c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//These can be used in other files later
export { projectStorage, projectFirestore, timestamp};