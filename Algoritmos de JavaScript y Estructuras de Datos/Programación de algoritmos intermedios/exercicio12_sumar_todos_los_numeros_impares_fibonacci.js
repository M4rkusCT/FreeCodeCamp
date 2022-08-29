// Suma todos los números impares de Fibonacci

// Metodo 1
function sumFibs(num) {
    let a = 0, b = 1;
    let result = 1;
    let num2 = 1;
    while(num2 <= num) {
        if(num2 % 2 !== 0 && num2 <= num) {
            result += num2;
        }
        a = b;
        b = num2;
        num2 = a + b;
    }
    return result;
}
  
sumFibs(10);

// Metodo 2
/*
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
*/