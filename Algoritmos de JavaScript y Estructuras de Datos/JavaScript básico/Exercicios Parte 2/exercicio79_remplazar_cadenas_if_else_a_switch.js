// Reemplazando cadenas de "If Else" por "Switch"

function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea

    switch (val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
  
    // Cambia solo el código encima de esta línea
    return answer;
}
  
chainToSwitch(7);