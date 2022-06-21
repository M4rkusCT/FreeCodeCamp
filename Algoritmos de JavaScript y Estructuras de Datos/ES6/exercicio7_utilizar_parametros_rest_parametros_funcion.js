// Utiliza el parámetro rest con parámetros de función

function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(0,1,2));