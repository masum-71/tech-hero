// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBARKZ4f_1MD6zMjmMry2zTih2vXp2lUpQ",
  authDomain: "monpura-news.firebaseapp.com",
  projectId: "monpura-news",
  storageBucket: "monpura-news.appspot.com",
  messagingSenderId: "255255393060",
  appId: "1:255255393060:web:8d733adb06eb3b71ed39b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;