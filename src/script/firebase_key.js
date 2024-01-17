// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCS__gz5HwPpZjbXHiwymNSscuMEHUY3U",
  authDomain: "autism-f68cd.firebaseapp.com",
  projectId: "autism-f68cd",
  storageBucket: "autism-f68cd.appspot.com",
  messagingSenderId: "669728022277",
  appId: "1:669728022277:web:68429c964d447f86fe616c",
  measurementId: "G-N2Z0B0NEYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
