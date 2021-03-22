var valores=[true, 5, false,"hola","adios",2];

if (valores[3].length>valores[4].length) {
    document.write(valores[3] +" és mas largo<br>")
} else {
    document.write(valores[4] +" és mas largo<br>")

}

if (valores[1]>valores[5]){
    console.log(valores[0]);
}else{
    console.log(valores[2]);
}

var num1 = valores[1];num2 = valores[5];
var suma=num1+num2;
var resta=num1-num2;
var mult=num1*num2;
var divi=num1/num2;
var otro=num1%num2;
document.write("Suma= "+ suma +"<br>");
document.write("Resta= "+resta+"<br>");
document.write("Multiplicacion= "+mult+"<br>");
document.write("Division= "+divi+"<br>");
document.write("Modulo= "+otro+"<br>");

