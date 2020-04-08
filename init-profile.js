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
let collection_times = 0;
