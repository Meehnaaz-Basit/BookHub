import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[60vh]">
        <img
          className="w-96 mx-auto"
          src="../../assets/7938322_3814347.svg"
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold mb-6">Url not found !</p>
        <Link
          to="/"
          className=" bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold"
        >
          Go Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
