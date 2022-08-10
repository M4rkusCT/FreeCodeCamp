// Diferencia entre dos arreglos

// Metodo 1
function diffArray(arr1, arr2) {
    const newArr = [];
    let num = arr1.length > arr2.length ? arr1.length : arr2.length;
    for(let i = 0;i < num;i++) {
      if(arr1.indexOf(arr2[i]) < 0) newArr.push(arr2[i]);
      if(arr2.indexOf(arr1[i]) < 0) newArr.push(arr1[i]);
    } 
    return newArr.filter(n => n != undefined).map(n => n);
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Metodo 2
/*
function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/