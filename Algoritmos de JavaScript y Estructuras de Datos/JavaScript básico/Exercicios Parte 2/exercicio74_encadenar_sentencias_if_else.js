// Encadena sentencias if else

function testSize(num) {
    // Cambia solo el código debajo de esta línea
    if (num < 5) {
        return "Tiny";
    } else if (num >= 5 && num < 10) {
        return "Small";
    } else if (num >= 10 && num < 15) {
        return "Medium";
    } else if (num >= 15 && num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }
  
    return "Change Me";
    // Cambia solo el código encima de esta línea
}
  
testSize(7);