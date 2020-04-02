firebase.initializeApp({
    apiKey: 'AIzaSyAlieG28M5AmvPAcNpG7L5uXB_MYirZhvE',
    authDomain: 'https://test 123.firebaseapp.com',
    projectId: 'test-123-256509'
});
  
const db = firebase.firestore();
const auth = firebase.auth();
const g_provider = new firebase.auth.GoogleAuthProvider();
const fb_provider = new firebase.auth.FacebookAuthProvider();

let ulTag = document.querySelector("#list ul");
let searchButton = document.querySelector("#searchButton");
let userName = document.querySelector("#name");
let namesList = [];

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
