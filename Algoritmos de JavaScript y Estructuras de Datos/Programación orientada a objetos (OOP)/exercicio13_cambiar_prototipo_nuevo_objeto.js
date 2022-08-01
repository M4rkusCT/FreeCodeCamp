// Cambia el prototipo a un nuevo objeto

function Dog(name) {
  this.name = name;
}
  
Dog.prototype = {
// Cambia solo el código debajo de esta línea
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
  
let candidate = new Dog("Guts");
  
candidate.eat();
candidate.describe();