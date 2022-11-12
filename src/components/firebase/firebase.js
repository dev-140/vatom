// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe4reP4z7H-INzJTqmMeyB4-JYLZiCPGU",
    authDomain: "vatom-5dcd4.firebaseapp.com",
    projectId: "vatom-5dcd4",
    storageBucket: "vatom-5dcd4.appspot.com",
    messagingSenderId: "1006345845416",
    appId: "1:1006345845416:web:230f6ebabbfd7a58f7609d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
