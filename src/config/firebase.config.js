// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-xF0gfuhQ4rFMU8Jlq2-RKhY5pbDK1bY",
  authDomain: "brand-shop-client-1.firebaseapp.com",
  projectId: "brand-shop-client-1",
  storageBucket: "brand-shop-client-1.appspot.com",
  messagingSenderId: "13038145560",
  appId: "1:13038145560:web:62f680ce12b1934d21736d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);