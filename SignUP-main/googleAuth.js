"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu43Bd3Dn-492piLtir1U2dkh0y8IrGvQ",
  authDomain: "artisanshub-f39c4.firebaseapp.com",
  projectId: "artisanshub-f39c4",
  storageBucket: "artisanshub-f39c4.appspot.com",
  messagingSenderId: "206003357954",
  appId: "1:206003357954:web:b0135fa49e1cc6726bda1b",
  measurementId: "G-KNGXYM5WQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const googleProvider = new GoogleAuthProvider();

//Google Button
const googleLogin = document.getElementById("google-login-button");
googleLogin.addEventListener('click', function(e){
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user)
    window.location.href = "../index.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})




