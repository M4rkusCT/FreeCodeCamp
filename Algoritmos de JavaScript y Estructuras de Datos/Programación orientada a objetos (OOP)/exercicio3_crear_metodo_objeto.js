// Crea un método en un objeto

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};
  
dog.sayLegs();