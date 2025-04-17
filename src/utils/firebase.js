// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAawhwX910JjpzsVV8hs-kRvDiHlRi2WVs",
  authDomain: "netflixgpt-231e9.firebaseapp.com",
  projectId: "netflixgpt-231e9",
  storageBucket: "netflixgpt-231e9.firebasestorage.app",
  messagingSenderId: "603218805280",
  appId: "1:603218805280:web:e1a11e33ec1425a3dff245",
  measurementId: "G-C14CZZDJHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();