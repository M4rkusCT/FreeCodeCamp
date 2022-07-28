// Monito Trocitos

function chunkArrayInGroups(arr, size) {
    let arrResult = [];
  	let arr2 = [];
  	for(let i = 0;i < arr.length;i++) {
  		arr2 = arr.splice(i,size,i);
  		arrResult.push(arr2);
    }
    return arrResult;
}
  
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);