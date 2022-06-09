// Comparación con el operador de estricta desigualdad

/* Ejemplos:
    3 !==  3  // false
    3 !== '3' // true
    4 !==  3  // true
*/

// Configuración
function testStrictNotEqual(val) {
    if (val !== 17) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
}
  
testStrictNotEqual(10);