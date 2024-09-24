// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// ...


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiceiWnuPoUBqHVu43tDqCd_GxptamNEQ",
  authDomain: "feedback-8fa9a.firebaseapp.com",
  projectId: "feedback-8fa9a",
  storageBucket: "feedback-8fa9a.appspot.com",
  messagingSenderId: "676092057837",
  appId: "1:676092057837:web:06a367f2bc398d9c3294e4",
  measurementId: "G-MHJVEC7XK8"
};

firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);


