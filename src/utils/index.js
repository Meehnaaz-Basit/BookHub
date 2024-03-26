export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

// save
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return alert("Book already exists");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  alert("Book saved");
};
