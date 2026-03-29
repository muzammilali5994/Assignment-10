import {signUp,signIn} from "./auth.js";
import { addProductDb , streamProducts , deleteProduct , getTotalProductsCount } from "./database.js";





    
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

    if(registerBtn){
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
    }
    if(loginBtn){
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
}

    const Iemail = document.getElementById("Iemail");
    const Ipassword = document.getElementById("Ipassword");

    const Remail = document.getElementById("Remail");
    const Rpassword = document.getElementById("Rpassword");


const signInSubmit = document.querySelector('.sign-in-form button');
const signUpSubmit = document.querySelector('.sign-up-form button');
if(signInSubmit){
// 3. Sign In Click Handler
signInSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = Iemail.value.trim();
    const password = Ipassword.value;
    
    if (email && password) {
        signIn(email, password);
        console.log("logged in")
    } else {
        alert("Please enter email and password");
    }
});
}
if(signUpSubmit){
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
}


/* Product Add  data  */

const  addBtn = document.getElementById("p-add")
addBtn.addEventListener("click", async ()=> {
    const  pname = document.getElementById("p-name").value;
    const  pprice = document.getElementById("p-price").value;

    if(pname && pprice){

        const result = await addProductDb(pname , pprice);
            if(result.success){
            alert("Product Added Successfully!");
            
            document.getElementById('p-name').value = "";
            document.getElementById('p-price').value = "";
            } else {
            alert("Error: " + result.error);
            }
    }
    else{
        alert("Please Fill Fields")
    }
})




const productListBody = document.getElementById('product-list');




streamProducts((products) => {
    productListBody.innerHTML = ""; 
    
    // ✅ Real-time Counter: Har baar jab products ki list change hogi, ye khud update hoga
    const counterDisplay = document.getElementById('total-count-display');

    if (counterDisplay) {
        counterDisplay.innerText = products.length;
    }

    products.forEach((product, index) => {
        productListBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><span class="badge bg-success">Active</span></td>
                <td class="text-center">
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteItem('${product.id}')">Delete</button>
                </td>
            </tr>
        `;
    });
});

window.deleteItem = async (id) => {
    const confirmation = confirm("Are you sure you want to delete this product?");
    
    if (confirmation) {
        const result = await deleteProduct(id);
        if (result.success) {
            console.log("Product deleted from Firestore");
            // No manual UI update needed, streamProducts handles it!
        } else {
            alert("Delete failed: " + result.error);
        }
    }
};


