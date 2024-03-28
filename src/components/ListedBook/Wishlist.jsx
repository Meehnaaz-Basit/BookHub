import { useEffect, useState } from "react";
import Wish from "./Wish";
import { getWish } from "../../utils";
import { FaAngleDown } from "react-icons/fa";
const Wishlist = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getWish();
    setBooks(storeBooks);
  }, []);

  // sort
  const [sortBy, setSortBy] = useState("None");
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
    const sortedBooks = [...books].sort((a, b) => {
      if (sortBy === "Rating") {
        return b.rating - a.rating;
      } else if (sortBy === "Number of Pages") {
        return b.totalPages - a.totalPages;
      } else if (sortBy === "Published year") {
        return b.yearOfPublishing - a.yearOfPublishing;
      } else {
        return 0;
      }
    });
    setBooks(sortedBooks);
  };

  return (
    <div className="relative">
      <div className="text-center absolute -top-40 left-[50%] transform -translate-x-1/2">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-600 text-white font-bold">
            Sort by {sortBy !== "none" ? `: ${sortBy}` : "None"} <FaAngleDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {/* <li>
              <a onClick={() => handleSort("None")}>None</a>
            </li> */}
            <li>
              <a onClick={() => handleSort("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("Number of Pages")}>
                Number of Pages
              </a>
            </li>
            <li>
              <a onClick={() => handleSort("Published year")}>Published year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {/* {books.map((book) => (
          <Wish book={book} key={book.bookId}></Wish>
        ))} */}
        {books.length === 0 ? (
          <p className="text-center text-2xl text-gray-500 mt-8 py-10 bg-gray-100 rounded-xl my-8">
            No books in wishlist
          </p>
        ) : (
          books.map((book) => <Wish book={book} key={book.bookId}></Wish>)
        )}
      </div>
    </div>
  );
};

export default Wishlist;
