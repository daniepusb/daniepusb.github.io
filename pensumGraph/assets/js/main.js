/*
Here yo uwill find:
    Initial Fetch Content
    Fetch Json File

*/

let _inicio
let _json_archivo

/* Funcion asincorona para obtener un contenido inicial par mostrar */
async function iniciar(){
    let response        = await fetch('assets/data/contenido.json')
    _inicio             = await response.json()

    imprimir_contenido(_inicio.content)
}

/* Funcion asincorona para obtener la informacion de un archivo json */
async function obtener_archivo(archivo){
    const response      = await fetch('assets/data/'+archivo)
    _json_archivo       = await response.json()
    
    imprimir_contenido(_json_archivo)
}

/* Funcion para desglosar el contenido del json | parametro array */
function imprimir_contenido(arreglo){
    let botones = ``;

    for (x in arreglo) {
        let boton = obtener_boton(arreglo[x])
        botones += boton
        //console.log(arreglo[x])
    }

    document.getElementById('resultado').innerHTML = botones

    //console.log("imprimir arreglo")
    //console.log(arreglo)
}

/* Funcion regresa el template html para un nodo */
function obtener_boton(parametro){
    let pcontenido = JSON.stringify( parametro.content )

    const boton = `<div class="btn" 
    data-name="${parametro.name}"
    data-hash="${parametro.hash}" 
    data-level="${parametro.level}" 
    data-content='${pcontenido}' 
    data-file="${parametro.file}" >
    <span class="nombre">${parametro.name}</span>
    </div>`

    return boton
}

/* Funcion borra del DOM todos los hijos de #resultado */
function reiniciar_resultado(){
    document.getElementById('resultado').innerHTML = ""
}

/* Funcion borra del DOM todo el contenido de #inicio y le coloca el primer botono #inicio nuevamente pasado por parametro*/
function reiniciar_tope(el){
    tope = document.getElementById('tope')
    tope.innerHTML = ""
    tope.appendChild(el)
}


/**
    //obtener_inicio*
    //leer content*
    //print next level
    //put animation
    //create suggestions
    //add    suggestions
    //delete suggestions
    //move   suggestions
    //save   suggestions
 */