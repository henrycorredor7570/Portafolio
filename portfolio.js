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

// para la alerta del envio del mensaje
function envioFormulario(){
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var nombre = document.querySelector('#contacto input[placeholder="Nombre Completo"]').value;
        var email = document.querySelector('#contacto input[placeholder="Dirección de Email"]').value;
        var tema = document.querySelector('#contacto input[placeholder="Tema..."]').value;
        var mensaje = document.querySelector('#contacto textarea').value;

        if (nombre && email && tema && mensaje) {
            alert('Mensaje enviado exitosamente');
            this.reset();
        } else {
            console.log('Por favor, completa todos los campos antes de enviar el mensaje');
        }
    });
}
