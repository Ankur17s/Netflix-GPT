// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW7j_OhOug9xUOureBq8T4Di1SGirIDzQ",
  authDomain: "netflixgpt-98e31.firebaseapp.com",
  projectId: "netflixgpt-98e31",
  storageBucket: "netflixgpt-98e31.appspot.com",
  messagingSenderId: "946522271681",
  appId: "1:946522271681:web:8b578e5d8847938afdc940",
  measurementId: "G-X24K2H0YWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
