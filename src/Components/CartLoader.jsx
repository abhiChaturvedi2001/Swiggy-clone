import React from "react";
import { Link } from "react-router-dom";

const CartLoader = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[80vh] text-center">
        <div>
          <img
            className="w-[200px] mx-auto"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt=""
          />
          <div className="mt-10">
            <h5 className="font-font-Poppins font-bold text-xl">
              Your Cart is Empty
            </h5>
            <h5 className="mt-4">
              You can go to home page to view more restaurants
            </h5>
            <Link to="/">
              <button className="mt-5 px-4 py-2 cursor-pointer font-bold  bg-orange-500 text-white font-font-Poppins ">
                GO BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLoader;
