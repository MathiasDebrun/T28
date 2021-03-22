function palin(){
    var cadena=document.getElementById('cad').value;
    var cadInv="";
    for (let index = cadena.length; index >= 0; index--) {
        cadInv+=cadena.charAt(index);
    }
    if (cadena == cadInv) {
        document.writeln('La cadena introducida es un pal')
    } else {
        document.writeln('La cadena introducida no es un pal')
    }
}