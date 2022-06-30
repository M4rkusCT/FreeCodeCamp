// Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

// Nota: Es convención preceder el nombre de una variable privada con un guión bajo (_). Sin embargo, la práctica en sí misma no hace una variable privada.
// Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

// Cambia solo el código debajo de esta línea

class Thermostat {
    constructor(f) {
        this.temperature_Fahrenheit = f;
    }
    get temperature() {
        return 5/9 * (this.temperature_Fahrenheit - 32);
    }
    set temperature(c) {
        this.temperature_Fahrenheit = c * 9.0 / 5 + 32;
    }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius