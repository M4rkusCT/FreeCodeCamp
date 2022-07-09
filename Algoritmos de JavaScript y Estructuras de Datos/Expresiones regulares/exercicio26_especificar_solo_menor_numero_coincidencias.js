// Especifica solo el menor número de coincidencias

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result = haRegex.test(haStr);