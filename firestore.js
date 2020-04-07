db.collection('users').onSnapshot(snapshot => {
    console.log(collection_times)
    if(collection_times >= 1){
      collection_times = 0;
      return;
    }
    console.log("ss")
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if(change.type == 'added' || change.type === "modified"){
        let d = change.doc.data().time; 
        let child1 = document.createElement("li");
        console.log(d)
        let html = `${change.doc.data().object} has arrived at ${d}`
        child1.innerHTML = html;
        ulTag.appendChild(child1);
        namesList.push(child1.textContent);  
      }
    })
    collection_times += 1;
})