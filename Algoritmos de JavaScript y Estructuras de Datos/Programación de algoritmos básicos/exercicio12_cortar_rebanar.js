// Cortar y rebanar

function frankenSplice(arr1, arr2, n) {
    arrCopy = arr1.slice();
    arrCopy2 = arr2.slice();
    for(let i = 0;i < n;i++) {
      arrCopy.splice(i,0,arrCopy2[i]);
      arrCopy.push(arrCopy2[i+n]);
    }
    return arrCopy;
}
  
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)