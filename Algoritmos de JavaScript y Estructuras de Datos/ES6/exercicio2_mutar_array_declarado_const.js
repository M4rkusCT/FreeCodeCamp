// Muta un arreglo declarado con const

const s = [5, 7, 2];
function editInPlace(s) {
  // Cambia solo el código debajo de esta línea
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Usar s = [2, 5, 7] sería inválido
  return s
  // Cambia solo el código encima de esta línea
}
editInPlace(s);