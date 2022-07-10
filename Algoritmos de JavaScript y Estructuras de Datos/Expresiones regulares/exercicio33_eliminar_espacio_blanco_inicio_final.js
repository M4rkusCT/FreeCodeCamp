// Elimina espacio en blanco del inicio y final

// 1 solucion
let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(\w+)(\W+)(\w+)(\W+)/; // Cambia esta línea
let result = hello.replace(wsRegex, "Hello, World!"); // Cambia esta línea

// 2 solucion
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Cambia esta línea
let result = hello.replace(wsRegex, ""); // Cambia esta línea