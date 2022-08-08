// Ordena un arreglo alfabéticamente con el método sort

function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    let arrNew = arr.sort(function(a,b) {
      return a === b ? 0 : a < b ? -1 : 0;
    });
    return arrNew;
    // Cambia solo el código encima de esta línea
}
  
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);