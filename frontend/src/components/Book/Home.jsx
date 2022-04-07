import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="flex flex-col mt-40 text-center mx-1">
        <h1 className="lg:text-7xl text-3xl">Welcome To The Movies library</h1>
      </div>
      <div className=" flex justify-center">
      <Link to='/movies'>
        <button className="text-2xl font-thin border-solid border-2 h-14 px-12 rounded-lg	 m-20 hover:bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
          View All movies
        </button>
        </Link>
      </div>
    </>
  );
};
