
/* Funcion para organizar las lineas que se van a dibujar en canvas */
function dibujar_en_canvas(){
    
    const root = calcular_coordenadas ( document.getElementById('inicio') )
    
    let nodos = document.getElementsByClassName('btn')

//TODO: saber como hacerlo con for
    Array.prototype.forEach.call(nodos, function(el) {
        let coordenadas = calcular_coordenadas( el )
        dibujar_linea (root,coordenadas)
        //console.log( el )
        //console.log(coordenadas)
    });
/* 
    for (x in nodos){
        let coordenadas = calcular_coordenadas( nodos[x] )
        dibujar_linea (root,coordenadas)
        console.log(nodos[x])
        console.log(coordenadas)
    }
*/
    
    
}



/* Funcion para dibujar lineas iniciales */
function dibujar_linea(punto_a, punto_b){

    var canvas = document.getElementById('canvas')
    if (canvas.getContext){
        var ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.moveTo(punto_a.x,punto_a.y)
        ctx.lineTo(punto_b.x,punto_b.y)
        ctx.stroke()
    }

    console.log(punto_a)
    console.log(punto_b)
}
  
/* Funcion para calcular las coodenadas de un nodo */
function calcular_coordenadas(nodo){
    var coor = nodo.getBoundingClientRect();
    //console.log(coor.x, coor.y);
    return coor;
}
  
  
    