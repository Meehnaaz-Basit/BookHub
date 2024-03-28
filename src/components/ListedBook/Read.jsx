import { NavLink } from "react-router-dom";

const Read = ({ book }) => {
  const {
    image,
    bookName,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    bookId,
  } = book;
  return (
    <div className="border p-4 rounded-xl shadow my-12 flex lg:flex-row flex-col items-center gap-8">
      <div>
        <img className="w-40" src={image} alt="" />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p>
          By : <span className="font-semibold"> {author} </span>
        </p>
        <div className="flex items-center lg:gap-4 gap-2">
          <p className="font-semibold">Tag</p>

          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-green-600 bg-green-100 py-2 lg:px-4 px-2 lg:text-base text-sm pt-1 mr-2 font-semibold rounded-3xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col lg:gap-5 gap-3">
          <div>
            <h2>
              Publisher: <span className="font-semibold">{publisher}</span>
            </h2>
          </div>
          <div>
            <h2>
              Page: <span className="font-semibold">{totalPages}</span>
            </h2>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <div className="bg-blue-100 text-blue-600 py-1 px-4 rounded-3xl">
            <h2>
              Category: <span>{category}</span>
            </h2>
          </div>
          <div className="bg-orange-100 text-orange-600 py-1 px-4 rounded-3xl">
            <h2>
              Rating: <span>{rating}</span>
            </h2>
          </div>
          <div>
            <NavLink
              to={`/book/${bookId}`}
              className="btn bg-green-600 text-white"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
