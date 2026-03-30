import {db} from "./config.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import {collection , addDoc ,onSnapshot, query, orderBy, doc ,serverTimestamp,deleteDoc ,getCountFromServer } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


export async function addProductDb(name,price,imageFile) {
    try{
        let imageUrl = "";
        if (imageFile) {
            const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
            const snapshot = await uploadBytes(storageRef, imageFile);
            imageUrl = await getDownloadURL(snapshot.ref); // Image ka link mil gaya
        }
        let docdata = await addDoc(collection(db,"products"),{
            name : name,
            price : price,
            image: imageUrl,
            createdAt: serverTimestamp()
        })
    console.log("Document written with ID: ", docdata.id);
    return { success: true, id: docdata.id };
    }
    catch(e){
    
    console.error("Error adding document: ", e);
    return { success: false, error: e };
    }
    
}

export function streamProducts(callback) {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    
    
    return onSnapshot(q, (snapshot) => {
        const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        callback(products); 
    });
}


export async function deleteProduct(id) {
    try {
        await deleteDoc(doc(db, "products", id));
        return { success: true };
    } catch (e) {
        console.error("Error deleting document: ", e);
        return { success: false, error: e };
    }
}


export async function getTotalProductsCount() {
    try {
        const coll = collection(db, "products"); // "products" string mein hona chahiye
        const snapshot = await getCountFromServer(coll);
        return snapshot.data().count;
    } catch (e) {
        console.error("Error fetching count: ", e);
        return 0;
    }
}
