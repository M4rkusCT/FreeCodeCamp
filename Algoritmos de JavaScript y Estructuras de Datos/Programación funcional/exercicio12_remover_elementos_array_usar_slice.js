// Remueve elementos de un arreglo usando slice en lugar de splice

function nonMutatingSplice(cities) {
    // Cambia solo el código debajo de esta línea
    let newArray = cities.slice(0, 3);
    return newArray;
    // Cambia solo el código encima de esta línea
}
  
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);