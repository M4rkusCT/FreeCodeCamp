// Comprueba la presencia de un elemento con indexOf()

// Metodo 1
function quickCheck(arr, elem) {
    // Cambia solo el código debajo de esta línea
    num = arr.indexOf(elem);
    result = num != -1 ? true : false;
    return result;
    // Cambia solo el código encima de esta línea
}
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Metodo 2
function quickCheck(arr, elem) {
    // Cambia solo el código debajo de esta línea
    let num = arr.indexOf(elem);
    if(num != -1) {
      return true;
    }
    else {
      return false;
    }
    // Cambia solo el código encima de esta línea
}
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));