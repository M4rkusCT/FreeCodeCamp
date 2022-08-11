// Donde estás

function whatIsInAName(collection, source) {
    const objKeys = Object.keys(source);
    // Cambia solo el código debajo de esta línea
      return collection.filter(obj => objKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
    // Cambia solo el código encima de esta línea
}
  
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });