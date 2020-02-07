
firebase.initializeApp({
  apiKey: 'AIzaSyAlieG28M5AmvPAcNpG7L5uXB_MYirZhvE',
  authDomain: 'https://test 123.firebaseapp.com',
  projectId: 'test-123-256509'
});

const db = firebase.firestore();
let ulTag = document.querySelector("#list ul");
let searchButton = document.querySelector("#searchButton");
let userName = document.querySelector("#name");
let namesList = [];

db.collection('users').onSnapshot(snapshot => {
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
    db.collection('users').doc("data").delete();
  })
})

searchButton.addEventListener("click",()=>{
  $(".results").remove();
  $(".brResults").remove();
  namesList.forEach(username => {
    if((username.toLowerCase().substr(0, userName.value.length) == userName.value.toLowerCase())&&(userName.value !="")){
      let child2 = document.createElement("p3");
      let br = document.createElement("br");
      child2.innerHTML = username;
      child2.className = "results";
      br.className = "brResults";
      document.querySelector("#searchResultList").appendChild(child2);
      document.querySelector("#searchResultList").appendChild(br);
    }
  })
});