// Verifica el constructor de un objeto con "instanceof"

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
// Cambia solo el código debajo de esta línea
let myHouse = new House(2);

myHouse instanceof House;