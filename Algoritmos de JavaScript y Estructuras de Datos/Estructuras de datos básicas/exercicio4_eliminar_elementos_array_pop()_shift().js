// Elimina elementos de un arreglo con pop() y shift()

function popShift(arr) {
    let popped = arr.pop(); // Cambia esta línea
    let shifted = arr.shift(); // Cambia esta línea
    return [shifted, popped];
}
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));