// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1adGWtdGXG1T7p155y21-ZvRYKUl4ETk",
  authDomain: "gptwithnetflix-1831f.firebaseapp.com",
  projectId: "gptwithnetflix-1831f",
  storageBucket: "gptwithnetflix-1831f.appspot.com",
  messagingSenderId: "1094899433590",
  appId: "1:1094899433590:web:4c3371061d46e93e52df57",
  measurementId: "G-M96G6NS53W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
