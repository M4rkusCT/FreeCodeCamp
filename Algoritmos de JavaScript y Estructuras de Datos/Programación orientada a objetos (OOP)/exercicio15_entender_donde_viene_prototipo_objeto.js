// Entendiendo de dónde viene el prototipo de un objeto

function Dog(name) {
    this.name = name;
}
  
let beagle = new Dog("Snoopy");
  
// Cambia solo el código debajo de esta línea
Dog.prototype.isPrototypeOf(beagle);