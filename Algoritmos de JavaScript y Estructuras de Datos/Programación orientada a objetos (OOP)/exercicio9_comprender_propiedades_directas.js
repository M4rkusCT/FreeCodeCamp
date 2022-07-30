// Comprender las propiedades directas

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea
for(let c in canary) {
    ownProps.push(c);
}