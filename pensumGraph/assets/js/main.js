/*
Here yo uwill find:
    Initial Fetch Content
    Fetch Json File

*/

let _inicio
let _json_archivo


/* Funcion asincorona para obtener un contenido inicial par mostrar */
async function iniciar(){
    const response      = await fetch('assets/data/contenido.json')
    _inicio             = await response.json()

    imprimir_contenido(_inicio.content)
    //dibujar_en_canvas()
    //console.log(_inicio)
}

/* Funcion asincorona para obtener la informacion de un archivo json */
async function obtener_archivo(archivo){
    const response      = await fetch("assets/data/"+archivo)
    _json_file          = await response.json()
    //console.log(_json_file);
}

/* Funcion para desglosar el contenido del json | parametro array */
function imprimir_contenido(arreglo){
    let botones = ``;

    for (x in arreglo) {
        let boton = obtener_boton(arreglo[x])
        botones += boton
        console.log(arreglo[x])
    }

    document.getElementById('resultado').innerHTML = botones

    //console.log("imprimir arreglo")
    //console.log(arreglo)
}

/* Funcion regresa el template html para un nodo */
function obtener_boton(parametro){
    const boton = `<div class="btn" data-name="${parametro.name}" data-hash="${parametro.hash}" data-level="${parametro.level}" data-content="${parametro.content}" data-file="${parametro.file}" ><span class="nombre">${parametro.name}</span></div>`
    return boton
}

/* Funcion regresa reinicia todo de nuevo borrando del DOM todos los hijos de #inicio */
function reiniciar(){
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('inicio').classList.remove('seleccionado')
}


/**
    //obtener_inicio
    //leer content
    //print next level
    //draw html
    //put animation
    //create suggestions
    //add    suggestions
    //delete suggestions
    //move   suggestions
    //save   suggestions
 */