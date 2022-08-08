// Devuelve un arreglo ordenado sin cambiar el arreglo original

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  let arrNew = arr.slice();
  return arrNew.sort(function(a,b){return a - b});
  // Cambia solo el código encima de esta línea
}

const arrNew = nonMutatingSort(globalArray);