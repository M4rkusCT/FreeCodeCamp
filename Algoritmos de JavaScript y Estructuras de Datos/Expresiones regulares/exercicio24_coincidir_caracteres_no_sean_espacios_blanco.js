// Haz coincidir caracteres que no sean espacios en blanco

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);