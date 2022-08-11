// Spinal case

function spinalCase(str) {
    let newStr = str.split(/(?=[A-Z])|\W|[_]/).join("-");
    return newStr.toLowerCase();
}
  
spinalCase('This Is Spinal Tap');