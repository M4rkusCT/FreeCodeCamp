// Invierte una cadena

function reverseString(str) {
    let arrayStr = [];
    arrayStr = str;
    str = "";
    for(let i = arrayStr.length - 1;i >= 0;i--) {
      str += arrayStr[i];
    }
    return str;
}
  
reverseString("hello");