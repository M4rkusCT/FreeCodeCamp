// Refactoriza variables globales por fuera de funciones

// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookList,bookName) {
  let newBookList = bookList.slice();
  newBookList.push(bookName);
  return newBookList;
  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookList, bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {
        let newBookList = bookList.slice();
        newBookList.splice(book_index, 1);
        return newBookList;
        // Cambia el código encima de esta línea
    }
}

const newBookList = remove(add(bookList, "A Brief History of Time"));