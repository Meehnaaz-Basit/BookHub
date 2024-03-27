import { useEffect, useState } from "react";
import Wish from "./Wish";
import { getWish } from "../../utils";
const Wishlist = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getWish();
    setBooks(storeBooks);
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Wish book={book} key={book.bookId}></Wish>
      ))}
    </div>
  );
};

export default Wishlist;
