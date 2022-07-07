// Restringe posibles nombres de usuario

let username = "JackOfAllTrades";
let userCheck = /[A-Z][A-Za-z]+\d*$|[A-Z]\d\d+$/; // Cambia esta línea
let result = userCheck.test(username);