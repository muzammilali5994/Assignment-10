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
    // querySelectorAll use karein taake dono Navbars ke elements update hon
    const userDisplays = document.querySelectorAll('#user-display');

    if (user) {
        console.log("User is logged in:", user.email);
        userDisplays.forEach(display => {
            display.innerText = user.email;
        });

        // Agar user logged in hai aur login page par hai, to dashboard bhejo
        if (isLoginPage) {
            window.location.replace("dashboard.html");
        }
    } else {
        console.log("No user logged in.");
        // Agar user logged in nahi hai aur dashboard par hai, to login par bhejo
        if (isDashboard) {
            window.location.replace("index.html");
        }
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

// --- LOGOUT LOGIC ---
// Event delegation use karein taake dono logout buttons kaam karein
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'logout-btn') {
        signOut(auth).then(() => {
            console.log("Logged out successfully");
            window.location.replace("index.html");
        }).catch(err => alert(err.message));
    }
});