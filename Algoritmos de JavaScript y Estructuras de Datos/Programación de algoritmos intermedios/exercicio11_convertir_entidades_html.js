// Convierte entidades HTML

function convertHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
    // En solo en una variable puedo poner varios replace como quisiera ya que cambia directamente sin necesidad de bucles o if/else. 
}
  
convertHTML("Dolce & Gabbana");