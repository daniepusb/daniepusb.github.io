/*
Aqui encontraras:
    Event Listener
*/
document.addEventListener('click', function (event) {
    let el = event.target

    if(el.matches('span')){//En caso de que se presione el span y no el boton
        el = el.parentNode
    }
    //console.log(el);

    if (el.matches('#inicio') ){
        if (!el.classList.contains('seleccionado') ){
            el.classList.add('seleccionado')        //marcar seleccion
            iniciar()//leer primer contenido
        }else{
            el.classList.remove('seleccionado')     //desmarcar seleccion
            reiniciar_resultado()                   //reinicio en resultado
            reiniciar_tope(el)
        }
    }else if (el.matches('.btn') ){
        el.classList.add('seleccionado')            //marcar seleccion
        document.getElementById('tope').appendChild(el)//apend opcion a tope con inicio
        reiniciar_resultado()                       //reinicio en resultado
        if( el.dataset.file ){
            obtener_archivo( el.dataset.file )//fetch file del seleccionado
        }else if( el.dataset.content ){
            imprimir_contenido(  JSON.parse( el.dataset.content )   )
        }else{
            //has llegado a una especializacion
        }
    } else {
        return
    }
	//event.preventDefault();
    //console.log(event.target);
    //console.log(event.target.parentNode);

}, false);