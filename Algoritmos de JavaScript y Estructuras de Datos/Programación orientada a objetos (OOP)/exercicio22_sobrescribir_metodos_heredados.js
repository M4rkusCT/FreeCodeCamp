// Sobrescribir métodos heredados

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}


// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());