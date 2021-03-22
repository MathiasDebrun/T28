var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
function buscar(){
    
    //no me da la opcion de value, solo me da NodeValue
    var numDni=document.getElementById('DNI').value;
    numDni=parseInt(numDni);
    
    if (numDni < 0 || numDni>99999999) {
        document.write("Numero proporcionado no válido");
    }else{
        var calc=numDni%23;
        var letra=letras[calc];
        var letraIntro=document.getElementById('letra').value;
        if (letra == letraIntro) {
            document.write('La letra coincide con el numero del dni');
        } else {
            document.write('Las letras no coinciden');
        }
    }
    

};