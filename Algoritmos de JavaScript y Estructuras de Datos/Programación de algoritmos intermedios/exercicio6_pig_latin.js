// Pig Latin (Latin de los cerdos)

// Metodo 1
function translatePigLatin(str) {
    let testStr = /^[aeiou]+/;
    if(testStr.test(str)) {
        return str += "way";
    }
    else {
        let num = 0;
        for(let i = 0;i < str.length;i++) {
            if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") break;
            num++;
        }
        if(num > 0) {
            let letters = str.substring(0,num);
            let result = str.slice(num);
            return result += letters + "ay";
        }
        else {
            return str += "ay"
        }
    }
}
    
translatePigLatin("schwartz");

// Metodo 2
/*
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str.concat("way");
}
  
translatePigLatin("consonant");
*/