// Factoriza un número

function factorialize(num) {
    let result = 1;
    for(let i = 1;i <= num;i++) {
      result = result * i;
    }
    return result;
}
  
factorialize(5);