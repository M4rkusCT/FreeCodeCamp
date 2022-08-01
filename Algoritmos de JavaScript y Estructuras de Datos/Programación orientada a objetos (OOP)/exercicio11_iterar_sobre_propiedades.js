// Itera sobre todas las propiedades

function Dog(name) {
  this.name = name;
}
  
Dog.prototype.numLegs = 4;
  
let beagle = new Dog("Snoopy");
  
let ownProps = [];
let prototypeProps = [];
  
// Cambia solo el código debajo de esta línea
  
for(let b in beagle) {
  if(beagle.hasOwnProperty(b)) {
    ownProps.push(b);
  }
  else {
    prototypeProps.push(b);
  }
}