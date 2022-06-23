// Usa sintaxis de desestructuración para extraer valores de objetos

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
// Cambia solo el código debajo de esta línea

// Version ES5
const yesterday = HIGH_TEMPERATURES.yesterday;
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Version ES6
const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;

// Cambia solo el código encima de esta línea