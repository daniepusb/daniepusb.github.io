/*
Aqui encontraras:
    Event Listener
*/
document.addEventListener('click', function (event) {
    var el = event.target

    if(el.matches('span')){//En caso de que se presione el span y no el boton
        el = el.parentNode
    }

    if (el.matches('#inicio') ){
        if (el.classList.contains('seleccionado') ){
            reiniciar()//aplicar reinicio
        }else{
            el.classList.add('seleccionado')//marcar opcion seleccionada
            iniciar()//leer primer contenido
        }
    }else if (el.matches('.btn') ){
        el.classList.add('seleccionado') //marcar opcion seleccionada
        if( el.dataset.file ){
            obtener_archivo( el.dataset.file )
        }else{
            return
        }
    } else {
        return
    }
	//event.preventDefault();
    //console.log(event.target);
    //console.log(event.target.parentNode);

}, false);