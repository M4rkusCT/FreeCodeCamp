// Suma todos los números en un rango

function sumAll(arr) {
  let result = 0;
  let numMin = arr[0] < arr[1] ? arr[0] : arr[1];
  let numMax = arr[0] > arr[1] ? arr[0] : arr[1];
  for(let i = numMin;i <= numMax;i++) {
    result += i;
  }
  return result;
}
  
sumAll([1, 4]);