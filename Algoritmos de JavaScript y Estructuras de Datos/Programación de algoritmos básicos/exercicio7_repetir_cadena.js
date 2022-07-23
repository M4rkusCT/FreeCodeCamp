// Repite una cadena repite una cadena

function repeatStringNumTimes(str, num) {
    if(num > 0) {
      let strRepeat = "";
      while(num > 0) {
        strRepeat += str;
        num--;
      }
      return strRepeat;
    }
    else return str = "";
}
  
repeatStringNumTimes("abc", 3);