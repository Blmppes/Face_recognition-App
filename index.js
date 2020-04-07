window.onload = () => {
  my_interval = setInterval(() => {
      ulTag.scrollTop = ulTag.scrollHeight;
      clearInterval(my_interval);
  },100);
}

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

