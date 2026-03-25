import { auth } from "./config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// --- HELPERS ---
const isDashboard = window.location.pathname.includes("dashboard.html");
const isLoginPage = window.location.pathname.includes("index.html") || window.location.pathname === "/";

// --- MONITOR AUTH STATE ---
onAuthStateChanged(auth, (user) => {
    const userDisplay = document.getElementById('user-display');

    if (user) {
        if (userDisplay) userDisplay.innerText = user.email;
        if (isLoginPage) window.location.href = "dashboard.html";
    } else {
        if (isDashboard) window.location.href = "index.html";
    }
});

// --- SIGN UP ---
export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => window.location.href = "dashboard.html")
        .catch(err => alert(err.message));
};

// --- SIGN IN ---
export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => window.location.href = "dashboard.html")
        .catch(err => alert("Invalid Credentials: " + err.message));
};

// --- LOGOUT (Fixing your issue) ---
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = "index.html";
        });
    });
}