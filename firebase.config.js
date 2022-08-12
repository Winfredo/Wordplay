// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2htM6NKsrJRryDqgvggJV6k-iFJOYRzc",
  authDomain: "wordplay-9f9ae.firebaseapp.com",
  projectId: "wordplay-9f9ae",
  storageBucket: "wordplay-9f9ae.appspot.com",
  messagingSenderId: "28177692364",
  appId: "1:28177692364:web:6556e4142495fee405f469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}