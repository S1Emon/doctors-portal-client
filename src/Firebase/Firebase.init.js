// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJp4CBBQ-McWmWJ5cI9vEvWHrYAJUS79Q",
    authDomain: "doctors-portal-ae863.firebaseapp.com",
    projectId: "doctors-portal-ae863",
    storageBucket: "doctors-portal-ae863.appspot.com",
    messagingSenderId: "902501156054",
    appId: "1:902501156054:web:77a80434aeaacf78fdb577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;