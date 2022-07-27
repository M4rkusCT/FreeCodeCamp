// Haz que la primera letra de una palabra este en mayúscula

function titleCase(str) {
    str = str.toLowerCase();
    let arrayStr = str.split(" ");
    console.log(arrayStr);
    for(let i = 0;i < arrayStr.length;i++) {
        arrayStr[i] = arrayStr[i][0].toUpperCase() + arrayStr[i].substr(1);
    }
    return arrayStr.join(" "); // Se utiliza para unir las palabras de una array a una cadena; ["Hola", "gente"] => "Hola gente";
}
  
titleCase("I'm a little tea pot");