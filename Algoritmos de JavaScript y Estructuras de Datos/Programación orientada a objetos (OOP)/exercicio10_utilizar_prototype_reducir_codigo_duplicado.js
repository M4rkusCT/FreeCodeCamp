// Utiliza propiedades "prototype" para reducir código duplicado

function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;
  
// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");