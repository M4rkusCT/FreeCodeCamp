// Combina arreglos con el operador de propagación

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Cambia esta línea
    return sentence;
}
  
console.log(spreadOut());