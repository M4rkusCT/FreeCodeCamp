// Reutiliza patrones usando grupos de captura

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Cambia esta línea
let result = reRegex.test(repeatNum);