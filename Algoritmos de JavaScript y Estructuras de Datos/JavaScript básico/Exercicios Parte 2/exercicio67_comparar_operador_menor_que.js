// Comparación con el operador "menor que"

function testLessThan(val) {
    if (val < 25) {  // Cambia esta línea
      return "Under 25";
    }
  
    if (val < 55) {  // Cambia esta línea
      return "Under 55";
    }
  
    return "55 or Over";
}
  
testLessThan(10);