/*Funcion que permite acceder a los eventos del teclado*/
window.onload = function() {
    //document.onkeyup = info
    //document.onkeypress = info
    document.onkeydown = info
}



/*Funcion que permite resolver cada evento del teclado*/
function info(elEvento) {
    let evento = elEvento || window.event
    if (evento.type ==  "keydown" ) {
        
        switch (evento.keyCode) {
            case 27: //ESC
              reiniciar_todo()
              console.log(evento.keyCode)
            default:
              break;
        }
        
    }else{
        //console.log(elEvento)
    }
} 






/*
//var texto = document.getElementById("caja") //acceso al sitio de escritura
 let evento = elEvento || window.event
    if (evento.type ==  "keydown" ) {
        console.log(evento.keyCode)
    }else{

    }
tipo = "<div id='caja2'><p>Tipo de evento: " + evento.type + "</p>" //define tipo de evento
    propkeyCode = "<p>Propiedad keyCode " + evento.keyCode +  "</p>"  //info propiedad keyCode
    propcharCode = "<p>Propiedad charCode " + evento.charCode + "</p>" //info propiedad charCode
    
    if (evento.type ==  "keypress" ) { //el número de caracter sólo está en el evento keypress
        caracter = "<p>Caracter pulsado<br/> -Int. Explorer-: " + String.fromCharCode(evento.keyCode) + "</p>";
        caracter2 = "<p>Caracter pulsado<br/> -Resto naveg.-: " + String.fromCharCode(evento.charCode) + "</p>";
        }
    else {
        caracter = ""
        caracter2 = ""
        }
    //escribir el texto del evento, al haber tres eventos el texto se escribirá tres veces.
    if (texto)
    texto.innerHTML += tipo + propkeyCode + propcharCode + caracter + caracter2 + "<br/></div>"
    */