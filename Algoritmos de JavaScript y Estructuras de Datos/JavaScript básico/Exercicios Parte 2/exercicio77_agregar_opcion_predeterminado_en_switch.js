// Agrega una opción predeterminada en las declaraciones switch

function switchOfStuff(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
    switch (val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
  
  
    // Cambia solo el código encima de esta línea
    return answer;
}
  
switchOfStuff(1);