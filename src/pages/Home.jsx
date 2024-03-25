import { Link } from "react-router-dom";

const Home = () => {
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
    </div>
  );
};

export default Home;
