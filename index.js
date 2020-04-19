if(window.location.href == "http://127.0.0.1:5500/index.html" || window.location.href == "https://hionobi.github.io/Face_recognition-App/"){
  window.onload = () => {
    my_interval = setInterval(() => {
        ulTag.scrollTop = ulTag.scrollHeight;
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
}

const setUpNav = (state) => {
  if(state){
    $("#login-modal-btn").css("display","none");
    $("#register-modal-btn").css("display","none");
    $("#logout-btn").css("display","block");
    $("#profile-btn").css("display","block");
  }else{
    $("#login-modal-btn").css("display","block");
    $("#register-modal-btn").css("display","block");
    $("#logout-btn").css("display","none");
    $("#profile-btn").css("display","none");
  }
}