// Emparejamiento de ADN

// Metodo 1
function pairElement(str) {
    let arrStr = str.split("");
    let arrResult = [];
    for(let i = 0;i < arrStr.length;i++) {
      let arrADN = [];
        switch (arrStr[i]) {
            case "A":
                arrADN.push("T");
                arrADN.unshift(arrStr[i]);
                arrResult.push(arrADN);
                break;
            case "T":
                arrADN.push("A");
                arrADN.unshift(arrStr[i]);
                arrResult.push(arrADN);
                break;
            case "C":
                arrADN.push("G");
                arrADN.unshift(arrStr[i]);
                arrResult.push(arrADN);
                break;
            case "G":
                arrADN.push("C");
                arrADN.unshift(arrStr[i]);
                arrResult.push(arrADN);
                break;
        }
    }
    return arrResult;
}
  
pairElement("GCG");

// Metodo 2
/*
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}
  
//test here
pairElement("GCG");
*/