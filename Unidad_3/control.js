var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');
var textError = document.querySelector('p');

form.onsubmit = function(e) {
    if (usuario.value === ""){
      e.preventDefault();
      textError.textContent = 'Falta ingresar el Usuario.';
    } else if (clave.value === ""){
        e.preventDefault();
        textError.textContent = 'Falta ingresar la clave.';
    } else if ((usuario.value).search("@") == -1 ){
        e.preventDefault();
        textError.textContent = "Falta ingresar un @ en el usuario."
    }
  }