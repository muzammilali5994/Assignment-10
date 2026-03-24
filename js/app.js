import {signUp,signIn} from "./auth.js";




    
    gsap.from('.watch1', {
        x: -500,          
        opacity: 0,       
        duration: 2,
        ease: "power3.out"
    });

    
    gsap.from('.watch3', {
        x: 500,           
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    });

    
    gsap.from('.watch2', {
        y: -100,          
        opacity: 0,
        duration: 1.2,
        delay: 0.3,      
        ease: "back.out(1.7)"
    });

    
    gsap.from('.main-heading', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });


// Sign In page 

const loginBtn = document.querySelector('#show-login');
const registerBtn = document.querySelector('#show-register');
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

    registerBtn.addEventListener('click', () => {
        // Buttons switch
        loginBtn.classList.remove('active');
        registerBtn.classList.add('active');

        // Form Animation
        gsap.to(loginForm, { 
            opacity: 0, 
            x: -20, duration: 0.3, 
            onComplete: () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            gsap.fromTo(registerForm, { 
                opacity: 0, 
                x: 20 }, 
                { opacity: 1, 
                    x: 0, 
                    duration: 0.5 });
        }});
    });

    loginBtn.addEventListener('click', () => {
        // Buttons switch
        registerBtn.classList.remove('active');
        loginBtn.classList.add('active');

        // Form Animation
        gsap.to(registerForm, { 
            opacity: 0, 
            x: 20, 
            duration: 0.3, 
            onComplete: () => {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            gsap.fromTo(loginForm, { 
                opacity: 0, 
                x: -20 }, 
                { opacity: 1, 
                    x: 0, 
                    duration: 0.5 });
        }});
    });


    const Iemail = document.getElementById("Iemail");
    const Ipassword = document.getElementById("Ipassword");

    const Remail = document.getElementById("Remail");
    const Rpassword = document.getElementById("Rpassword");


 const signInSubmit = document.querySelector('.sign-in-form button');
const signUpSubmit = document.querySelector('.sign-up-form button');

// 3. Sign In Click Handler
signInSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = Iemail.value.trim();
    const password = Ipassword.value;
    
    if (email && password) {
        signIn(email, password);
    } else {
        alert("Please enter email and password");
    }
});

// 4. Sign Up Click Handler
signUpSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = Remail.value.trim();
    const password = Rpassword.value;
    
    if (email && password) {
        signUp(email, password);
    } else {
        alert("Please fill registration details");
    }
});