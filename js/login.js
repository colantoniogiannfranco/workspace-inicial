var email = document.getElementById('email_login');





document.getElementById('mi-formulario').addEventListener("submit", function(e){

    e.preventDefault()
    //console.log(email.value);
    localStorage.setItem( 'email_log',JSON.stringify(email.value));
       window.location.href = "home.html";
      console.log(localStorage.getItem('email_log'));

});
    
