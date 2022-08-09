// Aplicar programación funcional para convertir cadenas a slugs de URL

// Cambia solo el código debajo de esta línea
function urlSlug(title) {
    let arrURL = title.toLowerCase().split(" ");
    arrURL = arrURL.filter(car => car !== "").map(car => car);
    return arrURL.join("-");
}
// Cambia solo el código encima de esta línea
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");