// Haz el código más reutilizable con la palabra clave "this"

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
  
dog.sayLegs();