

function comprobar(texto){
    
    var textoM= texto.toUpperCase();
    var textom= texto.toLowerCase();
    
    if (texto==textoM){
        alert("Tiene sólo mayúsculas")
    } else if (texto==textom){
        alert("Tiene sólo minúsculas")
    } else {
        alert("Es una combinación")
    }
    
 } 
