// Utiliza una IIFE para crear un módulo

let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
})();

let duck = [];
funModule.singMixin(duck);
duck.sing();