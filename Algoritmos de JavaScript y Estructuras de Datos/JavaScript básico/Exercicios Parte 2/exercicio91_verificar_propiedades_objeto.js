// Verifica las propiedades de un objeto

function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea

    if(!obj[checkProp]) {
        return "Not Found"; 
    }
    else {
        return obj[checkProp]
    }

    return "Change Me!";
    // Cambia solo el código encima de esta línea
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"},"gift");