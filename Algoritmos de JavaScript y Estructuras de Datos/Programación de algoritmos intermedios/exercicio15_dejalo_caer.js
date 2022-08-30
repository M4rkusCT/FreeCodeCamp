// Déjalo caer

function dropElements(arr, func) {
    let arrResult = [];
    let result = false;
    for(let i = 0;i < arr.length;i++) {
        if(func(arr[i])) result = true;
        if(result !== false) arrResult.push(arr[i]);
    }
    return arrResult;
}
  
dropElements([1, 2, 3], function(n) {return n < 3; });