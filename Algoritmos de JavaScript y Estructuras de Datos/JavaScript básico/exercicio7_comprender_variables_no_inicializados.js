// Comprendiendo las variables no inicializadas

/* 
    Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). 
    Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number" (no es un número). 
    Si concatenas una cadena con una variable undefined, obtendrás una cadena de undefined.
*/

var a = 5;
var b = 10;
var c = "I am a";

a += 1;
b += 5;
c += c + " String!";