// Encuentra la palabra más larga en una cadena

// split() sirve para separar palabras enteras de una cadena y pasar a una array y cada palabra va a una posición de la array

/* Ejemplos:
  let cadena = "Hola gente de youtube";
  const array = cadena.split(" ") => array["Hola","gente","de","youtube"];
*/

// En usar split(" ")/split(-)/split(,)/split(/,\s|,\s|:\s/)/split("Hola") es que divide la palabras a partir de un caracter especial, expresion regular o cadena. 

function findLongestWordLength(str) {
  let number = 0;
  let word_numbers = str.split(" "); // split() sirve para separar palabras enteras de una cadena y pasar a una array y cada palabra va a una posición de la array
  for(let i = 0;i < word_numbers.length;i++) {
    if(word_numbers[i].length > number) {
      number = word_numbers[i].length;
    }
  }
  return number;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");