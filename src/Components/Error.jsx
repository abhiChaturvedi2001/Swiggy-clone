import React from "react";
import errorImg from "../Assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full text-center ">
        <div>
          <img className="w-[300px] mx-auto" src={errorImg} alt="" />
          <h1 className="mt-10 text-3xl text-blue-900 font-font-Poppins font-bold">
            We'll be back shortly
          </h1>
          <p className="font-font-Poppins font-medium mt-4">
            We are fixing a temporary glitch. Sorry for the inconvenience
          </p>
          <Link to="/">
            <button className="mt-5 px-4 py-2 cursor-pointer font-bold  bg-orange-500 text-white font-font-Poppins ">
              GO BACK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
