db.collection('users').onSnapshot(snapshot => {
  console.log("ss")
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    let presentName = "";
    if(change.type == 'added' || change.type === "modified"){
      if(change.doc.data().object != presentName){
        presentName =  change.doc.data().object;
        let d = new Date(); 
        let child1 = document.createElement("li");
        child1.innerHTML = `${change.doc.data().object} arrived at ${d.getHours()}:${d.getMinutes()} ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
        ulTag.appendChild(child1);
        namesList.push(child1.textContent);
      }
    }
  })
})

searchButton.addEventListener("click",(e)=>{
  e.preventDefault();
  $(".results").remove();
  $(".brResults").remove();
  namesList.forEach(username => {
    if((username.toLowerCase().substr(0, userName.value.length) == userName.value.toLowerCase())&&(userName.value !="")){
      let child2 = document.createElement("p3");
      let br = document.createElement("br");
      child2.innerHTML = username;
      child2.className = "results";
      br.className = "brResults";
      document.querySelector("#found-list").appendChild(child2);
      document.querySelector("#found-list").appendChild(br);
    }
  })
});

gLoginBtn.addEventListener("click", (e) => {
  firebase.auth().signInWithPopup(g_provider).then(() => {
      lgCloseBtn.click();
      alert("You have successfully signed up!");
  }).catch(function(error) {
      alert(error.message);
      console.log(error.message);
  });
})

fbLoginBtn.addEventListener("click", (e) => {
  firebase.auth().signInWithPopup(fb_provider);
})

const signUp = () => {
  auth.createUserWithEmailAndPassword(registerEmail.value, registerPassword.value).then(() => {
      alert("You have successfully signed up!")
      registerEmail.value = "";
      registerPassword = "";
  }).catch(function(error) {
      alert(error.message);
  });
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