// Hereda comportamientos de un supertipo (supertype)

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cambia solo el código debajo de esta línea

let duck = Object.create(Animal.prototype); // Cambia esta línea
let beagle = Object.create(Animal.prototype); // Cambia esta línea