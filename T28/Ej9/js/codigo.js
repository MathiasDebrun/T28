function mayus() {
    var cadena=document.getElementById('mayu').value;
        
    if(cadena == cadena.toUpperCase()){
        alert("La cadena esta formada solo por mayúsculas");
    }else if(cadena == cadena.toLowerCase()){
        alert("La cadena esta formada solo por minúsculas");
    }else{
        alert("La cadena esta formada por mayúsculas y minúsculas");
    }
}