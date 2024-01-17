/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { Auth } from "firebase/auth";



export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(Auth, email, password);
        console.log("User logged in:", userCredential.user);
    } 
    catch (error) {
        console.error("Error logging in:", error);
    }
}