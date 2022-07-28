function bouncer(arr) {
    let arrResult = [];
  for(let i = 0; i < arr.length;i++) {
      if(Boolean(arr[i]) !== false) { // La funcion Boolean convierte los valores en true o false.
        arrResult.push(arr[i]);
      }
  }
  return arrResult;
}

bouncer([7, "ate", "", false, 9]);