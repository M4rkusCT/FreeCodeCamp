// Devuelve los números mayores en los arreglos

function largestOfFour(arr) {
    let arrayNumbers = [];
    for(let i = 0;i < arr.length;i++) {
      let number = arr[i][0];
      for(let j = 1; j < arr.length;j++) {
        if(number < arr[i][j]){
          number = arr[i][j];
        }
      }
      arrayNumbers.push(number);
    }
    return arrayNumbers;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);