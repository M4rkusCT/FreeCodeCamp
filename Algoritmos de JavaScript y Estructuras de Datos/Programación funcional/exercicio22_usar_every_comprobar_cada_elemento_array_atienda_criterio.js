// Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio

function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
    let result = "";
    result = arr.every(function(currentValue) {
      return currentValue >= 0;
    });
    return result;
    // Cambia solo el código encima de esta línea
}
  
checkPositive([1, 2, 3, -4, 5]);