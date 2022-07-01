// Completa una promesa con "resolve" y "reject"

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer = true;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {
      reject("Data not received");
    }
});