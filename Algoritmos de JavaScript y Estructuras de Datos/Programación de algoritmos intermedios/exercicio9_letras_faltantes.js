// Letras faltantes

// Metodo 1
function fearNotLetter(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const arrStr = str.split("");
    let num = 0;
    for(let i = 0;i < letters.length;i++) {
        if(letters[i] === arrStr[0]) break;
        num++;
    }
    let newLetters = letters.substring(num);
    let arrLetters = newLetters.substring(0,str.length+1).split("");
    let result = arrLetters.filter(function(val) {
        return !arrStr.includes(val);
    }).join("");
    return result !== "" ? result : undefined;
}
  
console.log(fearNotLetter("abce"));

// Metodo 2
/*
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    // code of current character 
    const charCode = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration
        then a letter was skipped 
    if (charCode !== str.charCodeAt(0) + i) {
      // if current character skipped past a character find previous character and return
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}
// test here
fearNotLetter("abce");
*/