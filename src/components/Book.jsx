import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../utils";

const Book = () => {
  const books = useLoaderData();
  // const { bookName } = book;
  const { bookId } = useParams();
  const book = books.find((b) => b.bookId === parseInt(bookId));

  const {
    bookName,
    author,
    image,
    category,
    rating,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
    tags,
  } = book;

  // const [readBtn, setReadBtn] = useState([]);
  const handleReadBook = (book) => {
    saveBook(book);
  };

  // console.log(readBtn);
  return (
    <div className="flex justify-between items-center gap-20 my-16">
      <div className="basis-1/2">
        <img className="" src={image} alt="" />
      </div>
      <div className="basis-1/2">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p>
            By: <span className="font-semibold"> {author} </span>
          </p>
          <div className="border border-dashed w-full "></div>
          <p> {category} </p>
          <div className="border border-dashed w-full"></div>
          <p>
            <span className="font-semibold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Tag</p>
            <div>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-green-600 bg-green-100 py-2 px-4 pt-1 mr-2 font-semibold rounded-3xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-dashed w-full"></div>
          <div>
            <div className="overflow-x-auto">
              <table className="table-md">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Number of pages:</td>
                    <td className="font-bold">{totalPages}</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Publisher:</td>
                    <td className="font-bold"> {publisher} </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Year of Publishing:</td>
                    <td className="font-bold"> {yearOfPublishing} </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>Rating:</td>
                    <td className="font-bold"> {rating} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => handleReadBook(book)}
              className="btn bg-transparent border-2"
            >
              Read
            </button>

            <button className="btn bg-transparent border-2">Read</button>
            <button className="btn bg-blue-400 text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
