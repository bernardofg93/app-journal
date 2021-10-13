import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCrd4djv-gRU2uMmuxWGzREoGaLLe839RQ",
  
    authDomain: "react-app-74c2a.firebaseapp.com",
  
    projectId: "react-app-74c2a",
  
    storageBucket: "react-app-74c2a.appspot.com",
  
    messagingSenderId: "947288576868",
  
    appId: "1:947288576868:web:d13a19e16ef8d306cd2071"
  
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
  