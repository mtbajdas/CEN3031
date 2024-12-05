// FIREBASE INFO
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLDrfus0XqnwTdaEdmKTpHUkvzrmNcBpo",
  authDomain: "clinder-e1ae6.firebaseapp.com",
  projectId: "clinder-e1ae6",
  storageBucket: "clinder-e1ae6.appspot.com",
  messagingSenderId: "784562549864",
  appId: "1:784562549864:web:45ce4ae4832ab050e577dd",
  measurementId: "G-SWDK9BSM71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
//createUserWithEmailAndPassword(auth, email, password);
