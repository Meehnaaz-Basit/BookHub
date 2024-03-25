import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-[#F2F2F2] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
          <img
            src="./../../assets/banner-book.png"
            className="max-w-sm basis-3/5"
          />
          <div className="basis-2/5 space-y-8">
            <h1 className="text-5xl text-black font-bold leading-normal">
              Book to freshen up your bookshelf
            </h1>

            <Link to="/listed-books" className="btn bg-green-600 text-white">
              View the List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
