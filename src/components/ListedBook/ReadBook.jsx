import { useEffect, useState } from "react";
import Read from "./Read";
import { getBooks } from "../../utils";

const ReadBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getBooks();
    setBooks(storeBooks);
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Read book={book} key={book.bookId}></Read>
      ))}
    </div>
  );
};

export default ReadBook;
