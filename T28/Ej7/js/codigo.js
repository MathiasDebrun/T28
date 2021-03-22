function factorial(){
    var numero = document.getElementById('num').value;
    for (let index = numero-1; index > 0; index--) {
        numero *=index;
    }
    document.write('El factorial es '+numero);
}