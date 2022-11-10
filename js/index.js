document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


let email_stringficado = JSON.parse(localStorage.getItem('email_log'));
 
let nombreid = document.getElementById('nombre_id');

//nombreid.innerHTML = "PERFIL " + email_stringficado;

function nombre_usuario(){
    let divNombreUsuario = document.createElement('div');
    divNombreUsuario.innerHTML = `<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${email_stringficado}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
      <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
      <li><a class="dropdown-item" href="index.html">Cerrar session</a></li>
    </ul>
  </div> `
  nombreid.appendChild(divNombreUsuario);
}
nombre_usuario();