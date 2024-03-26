import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="text-center bg-gray-100 py-10 rounded-2xl text-3xl font-bold">
        <h2> Books </h2>
      </div>
      <div className="text-center mt-5">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-600 text-white font-bold text-base">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      {/* tab */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800 my-6">
        <Link
          to=""
          onClick={() => setTab(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tab === 0 ? "border border-b-0 rounded-t-lg" : "border-b"
          } border-gray-400 text-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTab(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tab === 1 ? "border border-b-0 rounded-t-lg" : "border-b"
          } border-gray-400 text-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      {/*  */}
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
