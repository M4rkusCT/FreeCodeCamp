// Aplanadora

// Metodo 1
function steamrollArray(arr) {
    const newArr = arr.reduce((obj, num) => {
        if(Array.isArray(num)) obj = obj.concat(steamrollArray(num));
        else obj.push(num);
        return obj
    },[]);
    return newArr;
}
  
steamrollArray([1, [2], [3, [[4]]]]);

// Metodo 2
/*
function steamrollArray(arr) {
  // Recursion is the breakfast of champions. ― Don Stewart
  var steamrolled = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamrolled = steamrolled.concat(subArray);
    } else {
      steamrolled.push(arr[i]);
    }
  }
  return steamrolled;
}
*/