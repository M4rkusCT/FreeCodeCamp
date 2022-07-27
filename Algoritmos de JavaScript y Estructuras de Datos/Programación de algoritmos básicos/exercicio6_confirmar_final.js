// Confirma el final

function confirmEnding(str, target) {
    let result = str.substr(str.length-target.length);
    if(result === target) {
      return true;
    }
    else return false;
}
  
confirmEnding("Bastian", "n");