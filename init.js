const firebaseConfig = {
    apiKey: "AIzaSyAlieG28M5AmvPAcNpG7L5uXB_MYirZhvE",
    authDomain: "test-123-256509.firebaseapp.com",
    databaseURL: "https://test-123-256509.firebaseio.com",
    projectId: "test-123-256509",
    storageBucket: "test-123-256509.appspot.com",
    messagingSenderId: "230215355272",
    appId: "1:230215355272:web:271668e17710f23674c83d",
    measurementId: "G-FMZFNQ0T6Q"
  };

firebase.initializeApp(firebaseConfig);
  
const db = firebase.firestore();
const auth = firebase.auth();
const g_provider = new firebase.auth.GoogleAuthProvider();
const fb_provider = new firebase.auth.FacebookAuthProvider();

if(window.location.href == "http://127.0.0.1:5500/index.html" || window.location.href == "https://hionobi.github.io/Face_recognition-App/"){
  console.log("ss")
  
}
let collection_times = 0;
let ulTag = document.querySelector("#list ul");
let searchButton = document.querySelector("#searchButton");
let userName = document.querySelector("#name");

let registerEmail = document.getElementById("registerEmail");
let registerPassword= document.getElementById("registerPassword");
let registerBtn = document.getElementById("register-btn");
let registerForm = document.getElementById("registerModal");
let registerUserName = document.getElementById("ip-username");
let registerCheck = document.getElementById("registerCheck");

let loginEmail = document.getElementById("loginEmail");
let loginPassword= document.getElementById("loginPassword");
let loginBtn = document.getElementById("login-btn");
let loginForm = document.getElementById("loginModal");
let fbLoginBtn = document.getElementById("fb-login-btn");
let gLoginBtn = document.getElementById("g-login-btn");
let lgCloseBtn = document.getElementById("login-close-btn");
let resetPasswordBtn = document.getElementById("reset-password-btn");
let namesList = [];