const ReadBook = () => {
  return (
    <div className="border p-4 rounded-xl shadow">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>The Catcher in the Rye</h2>
        <p>
          By : <span>Awlad Hossain</span>
        </p>
        <div className="flex items-center gap-4">
          <p className="font-semibold">Tag</p>
          <div className="my-4">
            <span className="text-green-600 bg-green-100 py-2 px-4 pt-1 mr-2 font-semibold rounded-3xl">
              #Young
            </span>
            <span className="text-green-600 bg-green-100 py-2 px-4 pt-1 mr-2 font-semibold rounded-3xl">
              #Identity
            </span>
            <span> Year of publish: 1923</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <h2>
              publisher: <span>Scribner</span>
            </h2>
          </div>
          <div>
            <h2>
              Page: <span>192</span>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 text-blue-600 py-1 px-4 rounded-3xl">
            <h2>
              Category: <span>Classic</span>
            </h2>
          </div>
          <div className="bg-orange-100 text-orange-600 py-1 px-4 rounded-3xl">
            <h2>
              Rating: <span>4.5</span>
            </h2>
          </div>
          <div>
            <button className="btn bg-green-600 text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
