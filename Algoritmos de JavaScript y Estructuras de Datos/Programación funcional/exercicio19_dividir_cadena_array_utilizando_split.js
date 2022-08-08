// Divide una cadena en un arreglo utilizando el método "split"

function splitify(str) {
    // Cambia solo el código debajo de esta línea
    let arrStr = str.split(/\W/).join(" ");
    return arrStr.split(" ");
    // Cambia solo el código encima de esta línea
}
  
splitify("This.is.a-sentence");