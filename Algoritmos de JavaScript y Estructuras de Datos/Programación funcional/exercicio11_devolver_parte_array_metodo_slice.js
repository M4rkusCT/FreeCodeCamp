// Devolver parte de un arreglo mediante el método slice

function sliceArray(anim, beginSlice, endSlice) {
    // Cambia solo el código debajo de esta línea
    let newArray = anim.slice();
    return newArray.slice(beginSlice, endSlice);
    // Cambia solo el código encima de esta línea
}
  
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);