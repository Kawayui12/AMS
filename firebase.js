// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5wilFMGNM0gx36IzW6uDsR7Rr8Vyq4x0",
  authDomain: "eastern-terra.firebaseapp.com",
  projectId: "eastern-terra",
  storageBucket: "eastern-terra.appspot.com",
  messagingSenderId: "1023292988616",
  appId: "1:1023292988616:web:1101efc44e2bbc20f219fd",
  measurementId: "G-CYRY0D37RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);