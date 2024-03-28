import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages To Read</a>
            </li> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-green-500 text-green-500 py-2 px-3 rounded-lg font-semibold"
                  : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-green-500 text-green-500 py-2 px-3 rounded-lg font-semibold"
                  : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-green-500 text-green-500 py-2 px-3  rounded-lg font-semibold"
                  : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
              }
            >
              Pages To Read
            </NavLink>
          </ul>
        </div>
        <a className=" text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-green-500 text-green-500 py-2 px-3 rounded-lg font-semibold"
                : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-green-500 text-green-500 py-2 px-3 rounded-lg font-semibold"
                : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages-to-read"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-green-500 text-green-500 py-2 px-3  rounded-lg font-semibold"
                : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
            }
          >
            Pages To Read
          </NavLink>
          <NavLink
            to="/bookHub"
            className={({ isActive }) =>
              isActive
                ? "border-2 border-green-500 text-green-500 py-2 px-3  rounded-lg font-semibold"
                : "border-2 border-transparent py-2 px-3  rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all"
            }
          >
            BookHub
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-blue-400 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
