// Agenters binarios

function binaryAgent(str) {
    const arrStr = str.split(" ");
    return arrStr.map(num => parseInt(num, 2)).map(num => String.fromCharCode(num)).join("");
}

// El parseInt() y el toString(), se pueden utilizar para convertir numeros binarios a decimales, octales o hexadecimales en parseInt(num(variable), 2/8/16(tipo de base)).
// y el toString(2/8/16) para convertir numeros a numeros binarios. 
  
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");