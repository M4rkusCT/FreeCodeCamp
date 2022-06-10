// Orden lógico de las sentencias "if else"

function orderMyLogic(val) {
    if (val > 5 && val < 10) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else if (val >= 10) {
      return "Greater than or equal to 10";
    }
}
  
orderMyLogic(4);