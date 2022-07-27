// Recorta una cadena

function truncateString(str, num) {
    let result = str.substr(0,num);
    if(str.length > num) {
      result += "...";
    }
    return result;
}
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);