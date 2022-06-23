// Usa sintaxis de desestructuración para asignar variables desde objetos anidados

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
  
// Cambia solo el código debajo de esta línea

const {today: {low: lowToday, today: highToday}} = LOCAL_FORECAST;

// Cambia solo el código encima de esta línea