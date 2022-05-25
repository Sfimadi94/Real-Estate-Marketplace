// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Mlyr4JJ8-pYikizNPdzffbAImdH1fNE",
  authDomain: "house-marketplace-app-cc731.firebaseapp.com",
  projectId: "house-marketplace-app-cc731",
  storageBucket: "house-marketplace-app-cc731.appspot.com",
  messagingSenderId: "288613468264",
  appId: "1:288613468264:web:7091c4bebe03cdaafc13dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
