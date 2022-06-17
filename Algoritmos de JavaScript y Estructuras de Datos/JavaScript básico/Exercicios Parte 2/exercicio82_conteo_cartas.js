// Conteo de cartas

let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea

  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count += 1;
        break;
    case 7:
    case 8:
    case 9:
        break;
    case 10:
    case 'A':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
        count -= 1;
        break; 
  }
  if(count <= 0) {
    return `${count} Hold`;
  }
  else {
    return `${count} Bet`
  }

  return "Change Me";
  // Cambia solo el código encima de esta línea
}

cc(2); cc('J'); cc(9); cc(2); console.log(cc(7));