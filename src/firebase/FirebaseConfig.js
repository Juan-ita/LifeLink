// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJAXRQvYvPv-bFhaCDRm8hN5BVWt9PTqc",
  authDomain: "lifelink-673a7.firebaseapp.com",
  projectId: "lifelink-673a7",
  storageBucket: "lifelink-673a7.firebasestorage.app",
  messagingSenderId: "109472605816",
  appId: "1:109472605816:web:b7266b958f2036a2a76f8d",
  measurementId: "G-95S4TC2460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider =new GoogleAuthProvider()