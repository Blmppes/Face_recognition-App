resetPasswordBtn.addEventListener("click", (e) => {
    let userResetEmail = prompt("Enter your reset email:");
    
    if(userResetEmail != ""){
        auth.sendPasswordResetEmail(userResetEmail).then(() => {
            alert("We sent the reset password link to your email, please check it :) !")
        }).catch((err) =>{
            alert(err.message);
        })
    }else{
        alert("Please enter your reset email first, thank you!");
    }
})

gLoginBtn.addEventListener("click", (e) => {
    firebase.auth().signInWithRedirect(g_provider).then(() => {
        lgCloseBtn.click();
        alert("You have successfully signed up!");
    }).catch(function(error) {
        alert(error.message);
        console.log(error.message);
    });
  })
  
  fbLoginBtn.addEventListener("click", (e) => {
    firebase.auth().signInWithRedirect(fb_provider);
})
  
const signUp = async () => {
    auth.createUserWithEmailAndPassword(registerEmail.value, registerPassword.value).then(() => {
        alert("You have successfully signed up!")
        registerEmail.value = "";
        registerPassword = "";
    }).catch(function(error) {
        alert(error.message);
    });

    let currentUser = firebase.auth().currentUser;

    let result = await new Promise((resolve, reject) => {
        currentUser.sendEmailVerification().then(() => {
            alert("We sent an verification email to you!, please check it and come up. Have fun!");
        }).catch((err) => {
            alert(err.message);
        })

        let emailVerification = firebase.auth().currentUser.emailVerified;
        if(emailVerification){
            resolve(true);
        }else{
            reject(false);
        }
    })
}
  
const signIn = () => {
    auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value).then(cred => {
        alert("You have successfully logined");
        loginEmail.value = "";
        loginPassword.value = "";
    }).catch(function(error) {
        alert(error.message);
    });
}
  
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(registerCheck.checked == false){
        alert("Please agree with terms and licenses");
        return;
    }else if(registerEmail.value.toLowerCase() != registerEmail.value){
        alert("All letters must be in lowercase");
        return;
    }

    signUp();
})
  
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signIn();
})
  
window.addEventListener("keypress", (e)=>{
    if(e.keyCode == 13 && inputMessage.value != "" && user != ""){
        updateToFireBase()
    }else if(e.keyCode == 13 && (registerEmail.value != "" && registerPassword.value != "")){
        if(registerCheck.checked == false){
            alert("Please agree with terms and licenses");
            return;
        }else if(registerEmail.value.toLowerCase() != registerEmail.value){
            alert("All letters must be in lowercase");
            return;
        }
        registerBtn.click();
    }else if(e.keyCode == 13 && (loginEmail.value != "" && loginPassword.value != "")){
        loginBtn.click();
    };
})
  
document.getElementById("logout-btn").addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert("You have successfully signed out!")
    })
    .catch(function(error) {
        alert(error.message);
    });
})