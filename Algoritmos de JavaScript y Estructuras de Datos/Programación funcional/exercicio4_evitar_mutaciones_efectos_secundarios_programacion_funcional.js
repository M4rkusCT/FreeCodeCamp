// Evita mutaciones y efectos secundarios utilizando programación funcional

// La variable global
var fixedValue = 4;

function incrementer() {
    // Cambia solo el código debajo de esta línea
    return fixedValue + 1;

    // Cambia solo el código encima de esta línea
}

var result = incrementer();
console.log(fixedValue);