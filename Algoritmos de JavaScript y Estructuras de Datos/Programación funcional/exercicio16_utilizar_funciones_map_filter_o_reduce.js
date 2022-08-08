// Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo

const squareList = arr => {
    // Cambia solo el código debajo de esta línea
    return arr.filter(number => number === parseInt(number) && number >= 0).map(number => number * number);
    // Cambia solo el código encima de esta línea
};
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);