// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDr0SfNRuDKDmGnIcNmlxOBeYSrO0rrclI",
    authDomain: "portfolio-d1847.firebaseapp.com",
    projectId: "portfolio-d1847",
    storageBucket: "portfolio-d1847.appspot.com",
    messagingSenderId: "156092690281",
    appId: "1:156092690281:web:b493ae29ac3e9cd07b97f8",
    measurementId: "G-6KKT1035C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };