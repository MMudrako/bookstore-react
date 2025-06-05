import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTc3uylY6AOz7twTWlc6SD2auwE6dt6o",
  authDomain: "bookstoreauth-bcdc8.firebaseapp.com",
  projectId: "bookstoreauth-bcdc8",
  storageBucket: "bookstoreauth-bcdc8.firebasestorage.app",
  messagingSenderId: "842253431032",
  appId: "1:842253431032:web:d5450c43524bc7154e0b0d",
  measurementId: "G-9CSB0VKQ6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
