import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCart from "../components/BookCart";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("../../public/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // console.log(books);
  return (
    <div>
      <div className="hero min-h-[80vh] bg-[#F2F2F2] rounded-2xl">
        <div className="hero-content flex md:flex-row flex-col  justify-evenly lg:text-start text-center">
          <div className="md:basis-2/5 space-y-8">
            <h1 className="md:text-5xl text-3xl text-black font-bold leading-normal ">
              Book to freshen up your bookshelf
            </h1>

            <Link to="/listed-books" className="btn bg-green-600 text-white">
              View the List
            </Link>
          </div>
          <img
            src="./../../assets/banner-book.png"
            className="max-w-sm md:basis-3/5"
          />
        </div>
      </div>
      <div className="my-8 py-8">
        <h1 className="text-3xl text-center font-bold">Books</h1>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {books.map((book) => (
            <BookCart key={book.id} book={book}></BookCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
