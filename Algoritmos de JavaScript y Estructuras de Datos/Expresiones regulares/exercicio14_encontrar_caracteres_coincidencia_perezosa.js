// Encuentra caracteres con una coincidencia perezosa

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.*?>/; // Cambia esta línea
let result = text.match(myRegex);