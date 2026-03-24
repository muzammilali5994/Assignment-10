// Ensure karein ke DOM load ho chuka hai


    // 1. Watch 1 (Left se screen ke andar aaye)
    gsap.from('.watch1', {
        x: -500,          // Left side se 300px piche se shuru ho
        opacity: 0,       // Shuru mein nazar na aaye
        duration: 2,
        ease: "power3.out"
    });

    // 2. Watch 3 (Right se screen ke andar aaye)
    gsap.from('.watch3', {
        x: 500,           // Right side se 300px aage se shuru ho
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    });

    // 3. Watch 2 (Center wali - Optional: oper se niche layein)
    gsap.from('.watch2', {
        y: -100,          // Oper se niche aaye
        opacity: 0,
        duration: 1.2,
        delay: 0.3,       // Thoda late shuru ho taake transition cool lage
        ease: "back.out(1.7)"
    });

    // 4. Heading animation
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
