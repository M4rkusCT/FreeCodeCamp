// Utiliza la exportación para compartir un bloque de código

const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
const lowercaseString = (string) => {
    return string.toLowerCase()
}

uppercaseString("hello people");
lowercaseString("HELLO PEOPLE");

export {uppercaseString, lowercaseString};