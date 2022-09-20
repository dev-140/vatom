// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5dWWzxYB7b-Auk91qJEBkOIwdAxeV7C0",
  authDomain: "vatom-deac3.firebaseapp.com",
  projectId: "vatom-deac3",
  storageBucket: "vatom-deac3.appspot.com",
  messagingSenderId: "678283181964",
  appId: "1:678283181964:web:6d820c607876959b83a0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = app.firestore();

export { app, firestore}