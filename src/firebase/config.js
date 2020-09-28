import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 



var firebaseConfig = {
    apiKey: "AIzaSyAG3K101npksW7_si1SPrG8vNcBzmoEC9U",
    authDomain: "group-project-1-2d0cf.firebaseapp.com",
    databaseURL: "https://group-project-1-2d0cf.firebaseio.com",
    projectId: "group-project-1-2d0cf",
    storageBucket: "group-project-1-2d0cf.appspot.com",
    messagingSenderId: "498082757172",
    appId: "1:498082757172:web:5d0129aea12a133c07e861"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };
