/*Funcion que me aplica el estilo a la opcion seleccionada en el menu quita la previamente seleccionada*/
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = ""; 
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive:
    var x = document.getElementById("nav");
    x.className = "";
}
/* funcion  que muestra el menu responsive */
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Abre el cliente de correo con el mensaje listo para enviar.
function envioFormulario(event){
    event.preventDefault();
    var formulario = event.currentTarget;
    if (!formulario.reportValidity()) return;

    var nombre = formulario.elements.nombre.value.trim();
    var email = formulario.elements.email.value.trim();
    var tema = formulario.elements.tema.value.trim();
    var mensaje = formulario.elements.mensaje.value.trim();
    var cuerpo = 'Hola Henry,\\n\\n' + mensaje + '\\n\\nMi nombre es ' + nombre + ' (' + email + ').';
    var enlace = 'mailto:henry.corredor7570@gmail.com?subject=' + encodeURIComponent(tema) + '&body=' + encodeURIComponent(cuerpo);
    window.location.href = enlace;
}

document.getElementById('current-year').textContent = new Date().getFullYear();
