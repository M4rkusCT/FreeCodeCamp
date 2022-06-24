// Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea
  const arr = [a,b,...list]; // Cambia esta línea
  // Cambia solo el código encima de esta línea
  return arr;
}
const arr = removeFirstTwo(source);