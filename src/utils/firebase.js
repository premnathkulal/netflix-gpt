// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7VC1GhAjgaG4ygzVftXrryCspCFFvkBs",
  authDomain: "netflix-gpt-d5785.firebaseapp.com",
  projectId: "netflix-gpt-d5785",
  storageBucket: "netflix-gpt-d5785.appspot.com",
  messagingSenderId: "89456663306",
  appId: "1:89456663306:web:52fa4978c8c020838078f3",
  measurementId: "G-MD0C1WFZ5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);