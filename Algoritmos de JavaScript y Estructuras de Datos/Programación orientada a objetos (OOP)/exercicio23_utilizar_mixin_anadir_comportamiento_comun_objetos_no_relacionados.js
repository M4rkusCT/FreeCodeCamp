// Utiliza un "mixin" para añadir un comportamiento común entre objetos no relacionados

let bird = {
    name: "Donald",
    numLegs: 2
};
  
let boat = {
    name: "Warrior",
    type: "race-boat"
};
  
// Cambia solo el código debajo de esta línea
let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Plane");
    }
}
  
glideMixin(bird);
glideMixin(boat);
  
bird.glide();
boat.glide();