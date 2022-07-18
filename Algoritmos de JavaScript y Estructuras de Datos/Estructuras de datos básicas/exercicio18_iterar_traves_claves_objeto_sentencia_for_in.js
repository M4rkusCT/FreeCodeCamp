// Itera a través de las claves de un objeto con una sentencia "for...in"

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: false
    },
    Sarah: {
      online: false
    }
}
  
function countOnline(usersObj) {
    // Cambia solo el código debajo de esta línea
  	let result = 0;
    for(let user in usersObj) {
        if(usersObj[user].online === true) {
            result++;
        }
    }
  	return result;
    // Cambia solo el código encima de esta línea
}
  
console.log(countOnline(users));