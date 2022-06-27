// Crea cadenas usando plantillas literales

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Cambia solo el código debajo de esta línea
    const failureItems = [
    ];

    for(let i = 0;i < arr.length;i++) {
        failureItems[i] = `<li class="text-warning">${arr[i]}</li>`;
    }
  	return failureItems;
    // Cambia solo el código encima de esta línea
}
  
const failuresList = makeList(result.failure);

console.log(failuresList);