// Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera

function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
}
  
let duck = new Bird();
duck.getWeight();