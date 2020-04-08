
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