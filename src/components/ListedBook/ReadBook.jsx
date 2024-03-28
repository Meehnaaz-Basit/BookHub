import { useEffect, useState } from "react";
import Read from "./Read";
import { getBooks } from "../../utils";
import { FaAngleDown } from "react-icons/fa";
const ReadBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getBooks();
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
        // Default
        return 0;
      }
    });
    setBooks(sortedBooks);
  };

  return (
    <div className="relative">
      <div className="text-center absolute -top-40 left-[50%] transform -translate-x-1/2">
        <details className="dropdown">
          <summary className="m-1 btn  bg-green-600 text-white font-bold">
            Sort by {sortBy !== "none" ? `: ${sortBy}` : "None"} <FaAngleDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
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
          <Read book={book} key={book.bookId}></Read>
        ))} */}
        {books.length === 0 ? (
          <p className="text-center text-gray-500 text-2xl mt-8 py-10 bg-gray-100 rounded-xl my-8">
            You didn't read any book
          </p>
        ) : (
          books.map((book) => <Read book={book} key={book.bookId}></Read>)
        )}
      </div>
    </div>
  );
};

export default ReadBook;
