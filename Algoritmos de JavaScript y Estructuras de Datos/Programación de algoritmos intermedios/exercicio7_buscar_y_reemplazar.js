// Busca y reemplaza

// Metodo 1
function myReplace(str, before, after) {
    let testStr = /^[A-Z]+/;
    if(testStr.test(before)) {
        let upper = after.substring(0,1).toUpperCase();
        after = after.slice(1);
        let newAfter = upper.concat(after);
        return str.replace(before, newAfter);
    }
    else {
        if(testStr.test(after)) {
            let lower = after.substring(0,1).toLowerCase();
            after = after.slice(1);
            let newAfter = lower.concat(after);
            return str.replace(before, newAfter);
        }
        return str.replace(before, after); 
    }
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Metodo 2
/*
function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1)
    } else {
        after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
}
  
// test here
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
*/