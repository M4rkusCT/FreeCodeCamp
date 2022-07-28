// Mutaciones

function mutation(arr) {
    for(let i = 0;i < arr.length;i++) {
        arr[i]= arr[i].toLowerCase(); 
  }
    for(let i = 0;i < arr[1].length;i++) {
    if(arr[0].indexOf(arr[1][i]) < 0) return false;
  }
    return true;
}

mutation(["ate", "date"]);