// Unión ordenada

function uniteUnique(arr) {
    const arrArguments = Array.from(arguments).slice(1);
    let arrNumbers = arrArguments.flat(); // Dentro de un array puede tener varios, se utiliza para unir a solo uno.
    const newArr = arr.filter((item, val) => arr.indexOf(item) === val);
    const newArrNumbers = arrNumbers.filter((item,val) => arrNumbers.indexOf(item) === val);
    const arrResult = newArrNumbers.filter(val => !newArr.includes(val));
    return newArr.concat(arrResult); 
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);