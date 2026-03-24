import { auth } from "./config.js"; // Aapka initialized auth yahan se aayega
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"; 

// --- SIGN UP FUNCTION ---
export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User Created:", userCredential.user);
            alert("Account Created!");
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
};

// --- SIGN IN FUNCTION ---
export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Logged In:", userCredential.user);
            window.location.href = "index.html"; // Login ke baad home page par le jayen
        })
        .catch((error) => {
            alert(error.message);
        });
};