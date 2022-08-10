// Busca y destruye

// Metodo 1
function destroyer(arr) {
    let arrArguments = [];
    let arrResult = [];
    for(let i = 1;i < arguments.length;i++) {
      arrArguments.push(arguments[i]);
    }
    for(let j = 0;j < arr.length;j++) {
      if(arrArguments.indexOf(arr[j]) < 0) arrResult.push(arr[j])
    }
    return arrResult;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Metodo 2
/*
function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/