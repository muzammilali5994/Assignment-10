import {db} from "./config.js";
import {collection , addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


export async function addProductDb(name,price) {
    try{
        let docdata = await addDoc(collection(db,"products"),{
            name : name,
            price : price
        })
    console.log("Document written with ID: ", docdata.id);
    return { success: true, id: docdata.id };
    }
    catch(e){
    
    console.error("Error adding document: ", e);
    return { success: false, error: e };
    }
    
}

export async function getProduct() {
    try
}