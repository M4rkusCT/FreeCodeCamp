// Usa recursión para crear un rango de números

function rangeOfNumbers(startNum, endNum) {
    
    if(startNum > endNum) {
        return [];
    }
    else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
};

rangeOfNumbers(1,5);