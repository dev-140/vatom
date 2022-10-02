// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK3gHvXiaVT04wBMa9Y3LDH32Z7_rNWwY",
  authDomain: "vatom-65743.firebaseapp.com",
  projectId: "vatom-65743",
  storageBucket: "vatom-65743.appspot.com",
  messagingSenderId: "510605245859",
  appId: "1:510605245859:web:c4319ad8e6f4d822ebae16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
