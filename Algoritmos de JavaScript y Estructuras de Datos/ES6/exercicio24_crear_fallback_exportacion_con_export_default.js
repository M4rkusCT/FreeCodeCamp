// Crear un fallback de exportación con export default

/* Aquí hay otra sintaxis export que necesitas saber, conocida como export default. Usualmente utilizarás esta sintaxis, 
si es sólo un valor el que está siendo exportado desde un archivo. También es utilizado para crear valores fallback para un archivo o módulo. */

/* Ya que export default es usado para declarar un valor fallback para un módulo o archivo, 
sólo puedes tener un valor que sea exportación por defecto en cada módulo o archivo. Además, no puedes usar export default con var, let, o const */

// Opcion 1
export default function subtract(x, y) {
    return x - y;
}

// Opcion 2
export default function(x, y) {
    return x - y;
}