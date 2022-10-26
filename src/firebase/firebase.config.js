// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDW_EWWYVItjvgw19CeiiXAqYvcpYwifh0",
    authDomain: "grow-more-326d3.firebaseapp.com",
    projectId: "grow-more-326d3",
    storageBucket: "grow-more-326d3.appspot.com",
    messagingSenderId: "383764648680",
    appId: "1:383764648680:web:936fba219839c252cbef5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app