import firebase from "firebase/app";

import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB41eQ07vNlI3ig9U4cKXmhlRE-s89TUM",
  authDomain: "let-me-ask-77f7f.firebaseapp.com",
  databaseURL: "https://let-me-ask-77f7f-default-rtdb.firebaseio.com",
  projectId: "let-me-ask-77f7f",
  storageBucket: "let-me-ask-77f7f.appspot.com",
  messagingSenderId: "93746919320",
  appId: "1:93746919320:web:4c279d1a16a627ee141ded",
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
