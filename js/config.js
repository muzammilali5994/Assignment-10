// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"; 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeJqxYmLpvNuxLpDbkaZohKBIJltfTg0M",
  authDomain: "assignment10-2ad15.firebaseapp.com",
  projectId: "assignment10-2ad15",
  storageBucket: "assignment10-2ad15.firebasestorage.app",
  messagingSenderId: "753934176733",
  appId: "1:753934176733:web:754602ea7bddd6bd23e634",
  measurementId: "G-FJWXZ8TCQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);