// Comparación con el operador de desigualdad

/* Ejemplo:
    1 !=  2    // true
    1 != "1"   // false
    1 != '1'   // false
    1 != true  // false
    0 != false // false
*/

// Configuración
function testNotEqual(val) {
    if (val != 99) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
  }
  
testNotEqual(10);