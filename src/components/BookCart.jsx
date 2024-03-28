import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCart = ({ book }) => {
  const { bookName, author, image, rating, category, tags, bookId } = book;
  // console.log(book, "bookcart");

  return (
    <Link
      className="flex flex-col border-2 p-4 rounded-lg hover:shadow-xl transition-all m-2"
      to={`/book/${bookId}`}
    >
      <div>
        <img alt="" className=" w-full h-52  object-contain" src={image} />
      </div>
      <div className="flex flex-col flex-1 py-4 space-y-3">
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
        <h3 className="flex-1 py-2 text-xl leading-snug font-bold">
          {bookName}
        </h3>
        <p className="font-medium">By: {author}</p>
        <div className="border border-dashed w-full my-5"></div>
        <div className="flex flex-wrap justify-between  space-x-2 text-base dark:text-gray-600">
          <span>{category}</span>
          <div className="flex items-center gap-2">
            <span className="text-base">{rating}</span>
            <span className="text-xl">
              <CiStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCart;
