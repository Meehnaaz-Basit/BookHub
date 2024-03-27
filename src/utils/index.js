export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
// save read
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return alert("Book already exists in read");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  alert("Book marked as read");
};

//

//
export const getWish = () => {
  let wish = [];
  const storedBooks = localStorage.getItem("wish");
  if (storedBooks) {
    wish = JSON.parse(storedBooks);
  }
  return wish;
};

//save wish
export const saveWish = (book) => {
  let wish = getWish();
  // Check if book is already marked as read
  const isRead = getBooks().find((b) => b.bookId === book.bookId);
  if (isRead) {
    return alert(
      "Book is already marked as read. You cannot add it to the wishlist."
    );
  }
  const isExist = wish.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return alert("Book already exists in wishlist");
  }
  wish.push(book);
  localStorage.setItem("wish", JSON.stringify(wish));
  alert("Book marked as wishlist");
};
