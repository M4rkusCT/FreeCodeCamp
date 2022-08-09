// Introducción a la currificación y a la aplicación de funciones parciales

function add(x) {
    // Cambia solo el código debajo de esta línea
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
    // Cambia solo el código encima de esta línea
}
  
add(10)(20)(30);