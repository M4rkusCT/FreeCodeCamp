// Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio

function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
    let result = "";
    result = arr.some(function(currentValue) {
      return currentValue >= 0;
    });
    return result;
    // Cambia solo el código encima de esta línea
}
  
checkPositive([1, 2, 3, -4, 5]);