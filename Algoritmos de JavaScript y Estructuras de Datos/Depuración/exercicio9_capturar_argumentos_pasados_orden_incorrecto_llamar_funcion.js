// Captura argumentos pasados en el orden incorrecto al llamar a una función

function raiseToPower(b, e) {
    return Math.pow(b, e);
}
  
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);