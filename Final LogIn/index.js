import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDu43Bd3Dn-492piLtir1U2dkh0y8IrGvQ",
  authDomain: "artisanshub-f39c4.firebaseapp.com",
  projectId: "artisanshub-f39c4",
  storageBucket: "artisanshub-f39c4.appspot.com",
  messagingSenderId: "206003357954",
  appId: "1:206003357954:web:b0135fa49e1cc6726bda1b",
  measurementId: "G-KNGXYM5WQB",
  databaseURL: "https://artisanshub-f39c4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize variables
const auth = getAuth(app);
const database = getDatabase(app);


//Set up register function
const loginBtn = document.getElementById('create-account-btn')
loginBtn.addEventListener('click', function(e){
    e.preventDefault()
    alert(3)
})  



