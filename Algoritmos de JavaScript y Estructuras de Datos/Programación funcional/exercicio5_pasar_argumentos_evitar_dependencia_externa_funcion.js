// Pasa argumentos para evitar la dependencia externa en una función

// La variable global
let fixedValue = 4;

// Cambia solo el código debajo de esta línea
function incrementer(fixedValue) {
  return fixedValue + 1;
  // Cambia solo el código encima de esta línea
}

let result = incrementer(fixedValue);
console.log(fixedValue);