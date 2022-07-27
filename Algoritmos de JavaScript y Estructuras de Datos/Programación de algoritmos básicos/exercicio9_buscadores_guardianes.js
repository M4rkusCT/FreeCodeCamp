function findElement(arr, func) {
    let num = 0;
    for(let i = 0;i < arr.length;i++) {
      let result = func(arr[i]);
      console.log(result);
      if(result === true) {
        num = arr[i];
        return num;
      }
      else num = undefined;
    }
    return num;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);